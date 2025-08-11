import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface DocumentData {
  slug: string
  title: string
  content: string
  frontmatter: Record<string, any>
}

export function getDocumentBySlug(slug: string): DocumentData | null {
  try {
    const fullPath = path.join(process.cwd(), 'content', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      content,
      frontmatter: data,
    }
  } catch (error) {
    console.error(`Error reading document ${slug}:`, error)
    return null
  }
}

export function getAllDocuments(): DocumentData[] {
  try {
    const contentDirectory = path.join(process.cwd(), 'content')
    const filenames = fs.readdirSync(contentDirectory)
    
    const documents = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const slug = name.replace(/\.md$/, '')
        return getDocumentBySlug(slug)
      })
      .filter((doc): doc is DocumentData => doc !== null)

    return documents
  } catch (error) {
    console.error('Error reading documents:', error)
    return []
  }
}

// Utility function to get image paths
export function getImagePaths(): string[] {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images')
    const filenames = fs.readdirSync(imagesDirectory)
    
    return filenames
      .filter(name => /\.(png|jpg|jpeg|gif|webp)$/i.test(name))
      .sort((a, b) => {
        // Extract numbers from filenames for proper sorting
        const aNum = parseInt(a.match(/^\d+/)?.[0] || '0')
        const bNum = parseInt(b.match(/^\d+/)?.[0] || '0')
        return aNum - bNum
      })
      .map(name => `/images/${name}`)
  } catch (error) {
    console.error('Error reading images:', error)
    return []
  }
}
