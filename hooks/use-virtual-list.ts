import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

interface UseVirtualListOptions<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  overscan?: number
  scrollContainer?: HTMLElement | null
}

export const useVirtualList = <T>({
  items,
  itemHeight,
  containerHeight,
  overscan = 5,
  scrollContainer,
}: UseVirtualListOptions<T>) => {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalHeight = items.length * itemHeight
  const visibleCount = Math.ceil(containerHeight / itemHeight)
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    items.length - 1,
    Math.floor(scrollTop / itemHeight) + visibleCount + overscan
  )

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1).map((item, index) => ({
      item,
      index: startIndex + index,
      top: (startIndex + index) * itemHeight,
    }))
  }, [items, startIndex, endIndex, itemHeight])

  const handleScroll = useCallback((event: Event) => {
    const target = event.target as HTMLElement
    setScrollTop(target.scrollTop)
  }, [])

  useEffect(() => {
    const container = scrollContainer || containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll, scrollContainer])

  const scrollToIndex = useCallback(
    (index: number, behavior: 'auto' | 'smooth' = 'auto') => {
      const container = scrollContainer || containerRef.current
      if (!container) return

      const top = index * itemHeight
      container.scrollTo({ top, behavior })
    },
    [itemHeight, scrollContainer]
  )

  const scrollToTop = useCallback(() => {
    scrollToIndex(0, 'smooth')
  }, [scrollToIndex])

  return {
    containerRef,
    visibleItems,
    totalHeight,
    scrollTop,
    scrollToIndex,
    scrollToTop,
    startIndex,
    endIndex,
  }
}
