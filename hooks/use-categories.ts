import { useState, useEffect } from 'react'
import { apiClient, CategoriesResponse } from '@/lib/api'
import { Language } from '@/types'

export const useCategories = (language: Language) => {
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await apiClient.categories.getCategories(language)
      
      if (response.error) {
        setError(response.error)
        setCategories([])
      } else if (response.data) {
        setCategories(response.data.categories || [])
      } else {
        setError('Неожиданный ответ от сервера')
        setCategories([])
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
      setError(errorMessage)
      setCategories([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [language])

  return {
    categories,
    isLoading,
    error,
    refetch: fetchCategories,
  }
}
