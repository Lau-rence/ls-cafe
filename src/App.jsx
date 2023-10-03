//Packages
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

//Components
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App