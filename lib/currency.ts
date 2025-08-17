import { Language } from '@/types'

export const getCurrencySymbol = (language: Language): string => {
  switch (language) {
    case 'ru':
      return 'сум'
    case 'uz':
      return 'so\'m'
    case 'en':
      return 'sum'
    default:
      return 'сум'
  }
}

export const formatPrice = (price: number, language: Language): string => {
  const currency = getCurrencySymbol(language)
  
  // Форматируем число с разделителями тысяч
  const formattedPrice = price.toLocaleString('ru-RU')
  
  return `${formattedPrice} ${currency}`
}
