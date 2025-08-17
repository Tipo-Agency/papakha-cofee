import { useState, useEffect } from 'react'
import { apiClient, ProductsResponse } from '@/lib/api'
import { Language, Product } from '@/types'

export const useProducts = (language: Language) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProductsByCategory = async (categoryId: string) => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await apiClient.products.getProductsByCategory(categoryId, language)
      
      if (response.error) {
        setError(response.error)
        setProducts([])
      } else if (response.data) {
        setProducts(response.data.products || [])
      } else {
        setError('Неожиданный ответ от сервера')
        setProducts([])
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
      setError(errorMessage)
      setProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  const searchProducts = async (query: string) => {
    if (!query.trim()) {
      setProducts([])
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      
      const response = await apiClient.products.searchProducts(query, language)
      
      if (response.error) {
        setError(response.error)
        setProducts([])
      } else if (response.data) {
        setProducts(response.data.products || [])
      } else {
        setError('Неожиданный ответ от сервера')
        setProducts([])
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
      setError(errorMessage)
      setProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  const clearProducts = () => {
    setProducts([])
    setError(null)
  }

  return {
    products,
    isLoading,
    error,
    fetchProductsByCategory,
    searchProducts,
    clearProducts,
  }
}
