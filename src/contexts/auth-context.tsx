'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextType, AuthState, LoginCredentials, User } from '@/types/auth'
import { AuthService } from '@/lib/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })

  // Initialize auth state from storage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = AuthService.getStoredUser()
        if (storedUser) {
          setAuthState({
            user: storedUser,
            isAuthenticated: true,
            isLoading: false
          })
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          })
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        })
      }
    }

    initializeAuth()
  }, [])

  const login = async (credentials: LoginCredentials & { remember?: boolean }) => {
    setAuthState(prev => ({ ...prev, isLoading: true }))

    try {
      const user = await AuthService.login(credentials)
      
      // Save to storage
      AuthService.saveUser(user, credentials.remember || false)
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }))
      throw error
    }
  }

  const logout = () => {
    AuthService.clearUser()
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    })
  }

  const updateUser = (userData: Partial<User>) => {
    if (!authState.user) return

    const updatedUser = { ...authState.user, ...userData }
    
    // Update storage
    AuthService.saveUser(updatedUser, AuthService.shouldRememberUser())
    
    setAuthState(prev => ({
      ...prev,
      user: updatedUser
    }))
  }

  const contextValue: AuthContextType = {
    ...authState,
    login,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
