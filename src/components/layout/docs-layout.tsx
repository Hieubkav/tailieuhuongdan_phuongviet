import { Header } from './header'
import { Sidebar } from './sidebar'
import { SmoothScroll } from '../smooth-scroll'
import { HeadingProcessor } from '../heading-processor'

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <HeadingProcessor />
      <Header />
      <div className="container flex-1 items-start md:grid md:grid-cols-[320px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-6">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <Sidebar className="h-full" />
        </aside>
        <main className="relative py-6 px-4 md:px-0 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0 max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
