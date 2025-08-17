export const API_BASE_URL = 'https://api.papakhacoffee.uz'
const API_ENDPOINT = `${API_BASE_URL}/api/v1/frontend`

import { Language, Product, MenuResponse, Category } from '@/types'

export interface ApiResponse<T> {
  data?: T
  error?: string
  status: number
}

export interface CategoriesResponse {
  categories: string[]
}

export interface ProductsResponse {
  products: Product[]
}

/**
 * Получение заголовков для API запросов
 */
const getHeaders = (language: Language): HeadersInit => ({
  'Accept-Language': language,
  'Content-Type': 'application/json',
})

/**
 * Базовый метод для выполнения API запросов
 */
const apiRequest = async <T>(
  endpoint: string,
  language: Language,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_ENDPOINT}${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        ...getHeaders(language),
        ...options.headers,
      },
    })

    if (!response.ok) {
      return {
        status: response.status,
        error: `HTTP ${response.status}: ${response.statusText}`,
      }
    }

    const data = await response.json()
    return {
      status: response.status,
      data,
    }
  } catch (error) {
    return {
      status: 0,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка сети',
    }
  }
}

/**
 * API сервис для работы с категориями
 */
export const categoriesApi = {
  /**
   * Получение списка всех категорий
   */
  async getCategories(language: Language): Promise<ApiResponse<CategoriesResponse>> {
    return apiRequest<CategoriesResponse>('/categories', language)
  },
}

/**
 * API сервис для работы с меню
 */
export const menuApi = {
  /**
   * Получение полного меню с иерархической структурой
   */
  async getFullMenu(language: Language): Promise<ApiResponse<MenuResponse>> {
    return apiRequest<MenuResponse>('/menu', language)
  },
}

/**
 * API сервис для работы с продуктами
 */
export const productsApi = {
  /**
   * Получение продуктов по категории
   */
  async getProductsByCategory(
    categoryId: string,
    language: Language
  ): Promise<ApiResponse<ProductsResponse>> {
    return apiRequest<ProductsResponse>(`/categories/${categoryId}/products`, language)
  },

  /**
   * Поиск продуктов по запросу
   */
  async searchProducts(
    query: string,
    language: Language
  ): Promise<ApiResponse<ProductsResponse>> {
    return apiRequest<ProductsResponse>(`/products/search?q=${encodeURIComponent(query)}`, language)
  },
}

/**
 * Основной API клиент
 */
export const apiClient = {
  categories: categoriesApi,
  products: productsApi,
  menu: menuApi,
}
