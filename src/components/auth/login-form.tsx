'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/auth-context'
import { LoginFormData } from '@/types/auth'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email là bắt buộc')
    .email('Email không hợp lệ'),
  password: z
    .string()
    .min(1, 'Mật khẩu là bắt buộc')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  remember: z.boolean().optional()
})

interface LoginFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function LoginForm({ onSuccess, onError }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)
    
    try {
      await login({
        email: data.email,
        password: data.password,
        remember: data.remember
      })
      
      onSuccess?.()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Đã xảy ra lỗi'
      setError('root', { message: errorMessage })
      onError?.(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Nhập email của bạn"
          {...register('email')}
          disabled={isSubmitting}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mật khẩu</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Nhập mật khẩu"
            {...register('password')}
            disabled={isSubmitting}
            className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isSubmitting}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
            </span>
          </Button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="remember"
          type="checkbox"
          {...register('remember')}
          disabled={isSubmitting}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label htmlFor="remember" className="text-sm font-normal">
          Ghi nhớ đăng nhập
        </Label>
      </div>

      {errors.root && (
        <div className="rounded-md bg-red-50 p-3">
          <p className="text-sm text-red-700">{errors.root.message}</p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Đang đăng nhập...
          </>
        ) : (
          'Đăng nhập'
        )}
      </Button>

      {/* Demo credentials */}
      <div className="mt-4 p-3 bg-muted rounded-md">
        <p className="text-xs text-muted-foreground mb-2">Tài khoản demo:</p>
        <div className="text-xs space-y-1">
          <div>Admin: admin@phuongviet.com / admin123</div>
          <div>Manager: manager@phuongviet.com / manager123</div>
          <div>Employee: employee@phuongviet.com / employee123</div>
        </div>
      </div>
    </form>
  )
}
