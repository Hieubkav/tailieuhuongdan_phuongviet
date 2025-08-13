export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'manager' | 'employee'
  department?: string
  position?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

export interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}
