'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.href.includes('#')) {
        const url = new URL(target.href)
        const hash = url.hash
        
        // Only handle internal anchor links
        if (url.pathname === window.location.pathname && hash) {
          e.preventDefault()
          
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            
            // Update URL without triggering navigation
            window.history.pushState(null, '', hash)

            // Trigger a custom event to update sidebar active state
            window.dispatchEvent(new CustomEvent('hashchange'))
          }
        }
      }
    }

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash
      if (hash) {
        // Small delay to ensure content is rendered
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      }
    }

    // Add event listeners
    document.addEventListener('click', handleAnchorClick)
    
    // Handle initial hash
    handleInitialHash()
    
    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleInitialHash)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('hashchange', handleInitialHash)
    }
  }, [])

  return null
}
