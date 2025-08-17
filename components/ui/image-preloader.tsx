import React, { useEffect, useRef } from 'react'

interface ImagePreloaderProps {
  src: string
  onLoad?: () => void
  onError?: () => void
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  src,
  onLoad,
  onError,
}) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!src || !imgRef.current) return

    const img = imgRef.current
    
    // Проверяем, не загружено ли уже изображение
    if (img.complete && img.naturalWidth > 0) {
      onLoad?.()
      return
    }

    // Устанавливаем src только если он изменился
    if (img.src !== src) {
      img.src = src
    }

    const handleLoad = () => {
      onLoad?.()
    }

    const handleError = () => {
      onError?.()
    }

    img.addEventListener('load', handleLoad, { once: true })
    img.addEventListener('error', handleError, { once: true })

    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
  }, [src, onLoad, onError])

  return (
    <img
      ref={imgRef}
      alt=""
      style={{
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
