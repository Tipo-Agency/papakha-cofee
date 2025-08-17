import React from 'react'
import Image from 'next/image'
import { useLazyImage } from '@/hooks/use-lazy-images'
import { cn } from '@/lib/utils'
import { ImagePlaceholder } from './image-placeholder'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  ...props
}) => {
  const {
    imgRef,
    isLoaded,
    isInView,
    error,
    handleLoad,
    handleError,
    fallback,
  } = useLazyImage({
    threshold: 0.1,
    rootMargin: '100px', // Загружаем изображения заранее
  })

  const handleImageLoad = () => {
    handleLoad()
    onLoad?.()
  }

  const handleImageError = () => {
    handleError()
    onError?.()
  }

  // Проверяем, есть ли валидный src
  if (!src || src.trim() === '') {
    return (
      <ImagePlaceholder
        className={cn(fill ? 'w-full h-full' : '', className)}
        size="md"
        text="Нет фото"
      />
    )
  }

  // Если изображение не в поле зрения, показываем placeholder
  if (!isInView && !priority) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'bg-gray-200 animate-pulse',
          fill ? 'w-full h-full' : '',
          className
        )}
        style={
          !fill && width && height
            ? { width: `${width}px`, height: `${height}px` }
            : undefined
        }
      >
        <div className="w-full h-full bg-gray-300 rounded" />
      </div>
    )
  }

  // Если произошла ошибка, показываем fallback
  if (error) {
    return (
      <ImagePlaceholder
        className={cn(fill ? 'w-full h-full' : '', className)}
        size="md"
        text="Ошибка загрузки"
      />
    )
  }

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...props}
    />
  )
}
