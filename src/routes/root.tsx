import { Navigation } from '@/components/navigation'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className="min-h-full">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Root
