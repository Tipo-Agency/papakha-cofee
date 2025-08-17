import { useState, useEffect, useCallback } from 'react'
import { apiClient, API_BASE_URL } from '@/lib/api'
import { Language, MenuResponse, Category, Dish } from '@/types'

export const useMenu = (language: Language) => {
  const [menu, setMenu] = useState<MenuResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const fetchMenu = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await apiClient.menu.getFullMenu(language)
      
      if (response.error) {
        setError(response.error)
        setMenu(null)
      } else if (response.data) {
        setMenu(response.data)
      } else {
        setError('Неожиданный ответ от сервера')
        setMenu(null)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
      setError(errorMessage)
      setMenu(null)
    } finally {
      setIsLoading(false)
    }
  }, [language])

  // Функция для обновления языка с перезагрузкой данных
  const updateLanguage = useCallback((newLanguage: Language) => {
    // При смене языка всегда загружаем новые данные
    // Очищаем старые данные и загружаем новые с новым языком
    setMenu(null)
    setError(null)
    setIsLoading(true)
    
    // Загружаем данные с новым языком
    fetchMenu()
  }, [fetchMenu])

  useEffect(() => {
    // При изменении языка всегда загружаем новые данные
    fetchMenu()
  }, [language]) // Загружаем данные при изменении языка

  // Вспомогательные функции для работы с данными
  const getCategories = (): string[] => {
    if (!menu) return []
    return menu.categories.map(cat => cat.category)
  }

  const getSubcategories = (categoryName: string): string[] => {
    if (!menu) return []
    const category = menu.categories.find(cat => cat.category === categoryName)
    return category ? category.subcategories.map(sub => sub.subcategory) : []
  }

  const getDishes = (categoryName: string, subcategoryName?: string): Dish[] => {
    if (!menu) return []
    
    const category = menu.categories.find(cat => cat.category === categoryName)
    if (!category) return []

    if (subcategoryName) {
      const subcategory = category.subcategories.find(sub => sub.subcategory === subcategoryName)
      return subcategory ? subcategory.dishes : []
    }

    // Если подкатегория не указана, возвращаем все блюда из категории
    return category.subcategories.flatMap(sub => sub.dishes)
  }

  const searchDishes = (query: string): (Dish & { id: string })[] => {
    if (!menu || !query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    const results: (Dish & { id: string })[] = []
    
    menu.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.dishes.forEach(dish => {
          if (
            dish.name.toLowerCase().includes(searchTerm) ||
            dish.description.toLowerCase().includes(searchTerm)
          ) {
            // Создаем уникальный ID из имени блюда и цены
            const uniqueId = `${dish.name}-${dish.price}`.replace(/\s+/g, '-').toLowerCase()
            results.push({ ...dish, id: uniqueId })
          }
        })
      })
    })
    
    return results
  }

  const getAllDishes = (): Dish[] => {
    if (!menu) return []
    return menu.categories.flatMap(cat => 
      cat.subcategories.flatMap(sub => sub.dishes)
    )
  }

  // Функция для добавления изображения в кэш
  const addImageToCache = useCallback((imageUrl: string) => {
    setLoadedImages(prev => {
      // Проверяем, есть ли уже это изображение в кэше
      if (prev.has(imageUrl)) {
        return prev // Возвращаем тот же Set, если изображение уже есть
      }
      // Создаем новый Set только если изображения нет
      return new Set(prev).add(imageUrl)
    })
  }, [])

  // Функция для проверки, загружено ли изображение
  const isImageLoaded = (imageUrl: string): boolean => {
    return loadedImages.has(imageUrl)
  }

  // Функция для получения кэшированного изображения
  const getCachedImageUrl = (imagePath: string): string => {
    const fullUrl = getFullImageUrl(imagePath)
    if (fullUrl && isImageLoaded(fullUrl)) {
      return fullUrl
    }
    return fullUrl
  }

  // Функция для формирования полного URL изображения
  const getFullImageUrl = (imagePath: string): string => {
    if (!imagePath || imagePath.trim() === '') return ''
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    return `${API_BASE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
  }

  // Функция для получения оптимизированного URL изображения с параметрами
  const getOptimizedImageUrl = (imagePath: string, width: number, quality: number = 75): string => {
    if (!imagePath || imagePath.trim() === '') return ''
    
    const baseUrl = getFullImageUrl(imagePath)
    if (!baseUrl) return ''
    
    // Добавляем параметры для оптимизации изображения
    const params = new URLSearchParams({
      w: width.toString(),
      q: quality.toString(),
      fm: 'webp', // Используем современный формат
      auto: 'format,compress', // Автоматическая оптимизация
    })
    
    return `${baseUrl}?${params.toString()}`
  }

  return {
    menu,
    isLoading,
    error,
    refetch: fetchMenu,
    updateLanguage,
    getCategories,
    getSubcategories,
    getDishes,
    searchDishes,
    getAllDishes,
    getFullImageUrl,
    getOptimizedImageUrl,
    addImageToCache,
    isImageLoaded,
    getCachedImageUrl,
  }
}
