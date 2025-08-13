'use client'

import { useAuth } from '@/contexts/auth-context'
import { LoginButton } from '@/components/auth/login-button'
import { UserProfile } from '@/components/auth/user-profile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestAuthPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="p-6">
            <p>Đang tải...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Authentication</CardTitle>
          <CardDescription>
            Trang test chức năng đăng nhập/đăng xuất
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <strong>Trạng thái:</strong> {isAuthenticated ? 'Đã đăng nhập' : 'Chưa đăng nhập'}
          </div>
          
          {isAuthenticated && user ? (
            <div className="space-y-4">
              <div>
                <strong>Thông tin người dùng:</strong>
                <ul className="mt-2 space-y-1">
                  <li>ID: {user.id}</li>
                  <li>Tên: {user.name}</li>
                  <li>Email: {user.email}</li>
                  <li>Vai trò: {user.role}</li>
                  <li>Phòng ban: {user.department}</li>
                  <li>Chức vụ: {user.position}</li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button onClick={logout} variant="destructive">
                  Đăng xuất
                </Button>
              </div>
              
              <div>
                <strong>User Profile Component (Header variant):</strong>
                <div className="mt-2">
                  <UserProfile variant="header" />
                </div>
              </div>
              
              <div>
                <strong>User Profile Component (Sidebar variant):</strong>
                <div className="mt-2 max-w-sm border rounded-lg">
                  <UserProfile variant="sidebar" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p>Bạn chưa đăng nhập. Hãy đăng nhập để xem thông tin.</p>
              <LoginButton />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
