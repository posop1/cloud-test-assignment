import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './libs/AppRoutes'

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}
