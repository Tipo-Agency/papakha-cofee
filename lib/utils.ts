import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Генерация ID секции на основе названия категории
 * Преобразует в нижний регистр и заменяет пробелы на дефисы
 */
export function generateSectionId(categoryName: string): string {
  return categoryName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
