import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';


const Home = lazy(() => import('../pages/Home/Home'));
const Nannies = lazy(() => import('../pages/Nannies/Nannies'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
export const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<PrivateRoute redirectTo="/" component={Favorites} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
