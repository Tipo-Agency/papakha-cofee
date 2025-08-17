// Типы для языков
export type Language = 'ru' | 'uz' | 'en'

// Типы для блюд
export interface Dish {
  name: string
  price: number
  description: string
  photo: string
}

// Типы для подкатегорий
export interface Subcategory {
  subcategory: string
  dishes: Dish[]
}

// Типы для категорий
export interface Category {
  category: string
  subcategories: Subcategory[]
}

// Типы для полного меню
export interface MenuResponse {
  categories: Category[]
}

// Legacy типы для обратной совместимости
export interface Product {
  id: number
  name: string
  description?: string
  price: string
  image?: string
  category: string
  subcategory?: string
}

// Типы для поиска
export interface SearchResult {
  products: Product[]
  total: number
  query: string
}

// Типы для состояния загрузки
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

// Типы для модальных окон
export interface ModalState {
  isOpen: boolean
  data: any | null
}
