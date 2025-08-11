import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'

export function rehypeImageWrapper() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName === 'img' && parent && parent.type === 'element') {
        // If the image is inside a paragraph and it's the only child, 
        // replace the paragraph with a div
        if (parent.tagName === 'p' && parent.children.length === 1) {
          parent.tagName = 'div'
          parent.properties = {
            ...parent.properties,
            className: 'image-wrapper my-6 md:my-8'
          }
        }
        
        // Add classes to the image
        node.properties = {
          ...node.properties,
          className: 'w-full h-auto max-w-full object-contain rounded-lg border shadow-sm block',
          style: 'display: block; margin: 0 auto;'
        }
      }
    })
  }
}
