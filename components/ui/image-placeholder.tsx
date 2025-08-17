import React from 'react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = '',
  size = 'md',
  text = 'Нет фото',
}) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div
      className={cn(
        'bg-gray-200 flex items-center justify-center text-gray-400 rounded',
        sizeClasses[size],
        className
      )}
    >
      <span>{text}</span>
    </div>
  )
}
