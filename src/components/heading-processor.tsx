'use client'

import { useEffect } from 'react'

export function HeadingProcessor() {
  useEffect(() => {
    const processHeadings = () => {
      // Find all headings with anchor IDs
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      
      headings.forEach((heading) => {
        const text = heading.textContent || ''
        const match = text.match(/^(.*?)\s*\{#([^}]+)\}$/)
        
        if (match) {
          const cleanText = match[1].trim()
          const anchorId = match[2]
          
          // Update the heading text without the anchor ID
          heading.textContent = cleanText
          
          // Set the ID attribute for anchor functionality
          heading.id = anchorId
        }
      })
    }

    // Process headings on mount
    processHeadings()
    
    // Also process when content changes (for dynamic content)
    const observer = new MutationObserver(processHeadings)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })

    return () => observer.disconnect()
  }, [])

  return null
}
