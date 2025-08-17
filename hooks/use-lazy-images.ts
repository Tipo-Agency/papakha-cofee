import { useState, useEffect, useRef, useCallback } from 'react'

interface UseLazyImageOptions {
  threshold?: number
  rootMargin?: string
  fallback?: string
}

export const useLazyImage = (options: UseLazyImageOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px', fallback = '/placeholder.svg' } = options
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        // Отключаем observer после первого появления
        if (imgRef.current) {
          observer.current?.unobserve(imgRef.current)
        }
      }
    })
  }, [])

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!imgRef.current) return

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.current.observe(imgRef.current)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [handleIntersection, threshold, rootMargin])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    setError(false)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
    setIsLoaded(false)
  }, [])

  return {
    imgRef,
    isLoaded,
    isInView,
    error,
    handleLoad,
    handleError,
    fallback,
  }
}
