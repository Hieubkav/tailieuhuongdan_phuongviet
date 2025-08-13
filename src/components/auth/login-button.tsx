'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LoginForm } from './login-form'

interface LoginButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

export function LoginButton({ 
  variant = 'default', 
  size = 'default',
  className 
}: LoginButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLoginSuccess = () => {
    setIsOpen(false)
  }

  const handleLoginError = (error: string) => {
    console.error('Login error:', error)
    // Error is already handled in the form
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <LogIn className="mr-2 h-4 w-4" />
          Đăng nhập
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng nhập hệ thống</DialogTitle>
          <DialogDescription>
            Nhập thông tin đăng nhập để truy cập vào hệ thống ERP Phương Việt
          </DialogDescription>
        </DialogHeader>
        <LoginForm 
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </DialogContent>
    </Dialog>
  )
}
