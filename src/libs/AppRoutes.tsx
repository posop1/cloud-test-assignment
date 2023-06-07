import { Route, Routes } from 'react-router-dom'
import { CreatePage, HomePage } from '../pages'

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/create"
          element={<CreatePage />}
        />
      </Routes>
    </>
  )
}
