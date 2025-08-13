import { User, LoginCredentials } from '@/types/auth'

// Mock users data for demo
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@phuongviet.com',
    name: 'Nguyễn Văn Admin',
    avatar: '/images/avatars/admin.jpg',
    role: 'admin',
    department: 'IT',
    position: 'Quản trị hệ thống'
  },
  {
    id: '2',
    email: 'manager@phuongviet.com',
    name: 'Trần Thị Manager',
    avatar: '/images/avatars/manager.jpg',
    role: 'manager',
    department: 'Nhân sự',
    position: 'Trưởng phòng nhân sự'
  },
  {
    id: '3',
    email: 'employee@phuongviet.com',
    name: 'Lê Văn Employee',
    avatar: '/images/avatars/employee.jpg',
    role: 'employee',
    department: 'Kế toán',
    position: 'Nhân viên kế toán'
  }
]

// Storage keys
const AUTH_STORAGE_KEY = 'erp_auth_user'
const REMEMBER_STORAGE_KEY = 'erp_auth_remember'

export class AuthService {
  // Simulate API login
  static async login(credentials: LoginCredentials): Promise<User> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Find user by email
    const user = MOCK_USERS.find(u => u.email === credentials.email)
    
    if (!user) {
      throw new Error('Email không tồn tại trong hệ thống')
    }

    // Simple password validation (in real app, this would be hashed)
    const validPasswords: Record<string, string> = {
      'admin@phuongviet.com': 'admin123',
      'manager@phuongviet.com': 'manager123',
      'employee@phuongviet.com': 'employee123'
    }

    if (validPasswords[credentials.email] !== credentials.password) {
      throw new Error('Mật khẩu không chính xác')
    }

    return user
  }

  // Save user to storage
  static saveUser(user: User, remember: boolean = false): void {
    if (typeof window === 'undefined') return

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    
    if (remember) {
      localStorage.setItem(REMEMBER_STORAGE_KEY, 'true')
    } else {
      localStorage.removeItem(REMEMBER_STORAGE_KEY)
    }
  }

  // Get user from storage
  static getStoredUser(): User | null {
    if (typeof window === 'undefined') return null

    try {
      const userStr = localStorage.getItem(AUTH_STORAGE_KEY)
      if (!userStr) return null

      return JSON.parse(userStr) as User
    } catch {
      return null
    }
  }

  // Check if user should be remembered
  static shouldRememberUser(): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(REMEMBER_STORAGE_KEY) === 'true'
  }

  // Clear user from storage
  static clearUser(): void {
    if (typeof window === 'undefined') return

    localStorage.removeItem(AUTH_STORAGE_KEY)
    localStorage.removeItem(REMEMBER_STORAGE_KEY)
  }

  // Get user initials for avatar fallback
  static getUserInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Get role display name
  static getRoleDisplayName(role: User['role']): string {
    const roleNames = {
      admin: 'Quản trị viên',
      manager: 'Quản lý',
      employee: 'Nhân viên'
    }
    return roleNames[role]
  }
}
