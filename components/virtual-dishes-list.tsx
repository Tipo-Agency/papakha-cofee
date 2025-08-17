'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { LazyImage } from '@/components/ui/lazy-image'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { useVirtualList } from '@/hooks/use-virtual-list'
import { Dish } from '@/types'

const getFullImageUrl = (imagePath: string): string => {
  if (!imagePath || imagePath.trim() === '') return ''
  
  const API_BASE_URL = 'https://api.papakhacoffee.uz'
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  return `${API_BASE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
}

interface VirtualDishesListProps {
  dishes: Dish[]
  onDishClick: (dish: Dish) => void
  className?: string
}

const DISH_CARD_HEIGHT = 320 // Высота карточки блюда в пикселях

export const VirtualDishesList: React.FC<VirtualDishesListProps> = ({
  dishes,
  onDishClick,
  className = '',
}) => {
  const containerHeight = 600 // Высота контейнера для виртуализации

  const { containerRef, visibleItems, totalHeight } = useVirtualList({
    items: dishes,
    itemHeight: DISH_CARD_HEIGHT,
    containerHeight,
    overscan: 3, // Количество элементов для предзагрузки
  })

  if (dishes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-[#94573c] text-lg">Нет доступных блюд</div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative overflow-auto"
        style={{ height: containerHeight }}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          {visibleItems.map(({ item: dish, top }) => (
            <div
              key={`${dish.name}-${dish.price}`}
              className="absolute w-full"
              style={{ top, height: DISH_CARD_HEIGHT }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      {dish.photo && dish.photo.trim() !== '' ? (
                        <LazyImage
                          src={getFullImageUrl(dish.photo)}
                          alt={dish.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                          quality={60}
                        />
                      ) : (
                        <ImagePlaceholder
                          className="w-full h-full rounded-lg"
                          size="sm"
                          text="Нет фото"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-[#94573c] mb-2 truncate">
                      {dish.name}
                    </h4>
                    {dish.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {dish.description}
                      </p>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#94573c]">
                        {dish.price} ₽
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => onDishClick(dish)}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
