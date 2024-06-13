import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<PokemonList />} />
        <Route path={'/pokemon/:name'} element={<PokemonDetail />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
