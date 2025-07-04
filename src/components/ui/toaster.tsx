'use client'

import { useState, useEffect } from 'react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

let toasts: Toast[] = []
let listeners: ((toasts: Toast[]) => void)[] = []

export function toast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { id, message, type }
  
  toasts = [...toasts, newToast]
  listeners.forEach(listener => listener(toasts))
  
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id)
    listeners.forEach(listener => listener(toasts))
  }, 5000)
}

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState<Toast[]>([])

  useEffect(() => {
    const listener = (newToasts: Toast[]) => setCurrentToasts(newToasts)
    listeners.push(listener)
    
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }, [])

  if (currentToasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {currentToasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-lg shadow-lg max-w-sm ${
            toast.type === 'success' ? 'bg-green-500 text-white' :
            toast.type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

