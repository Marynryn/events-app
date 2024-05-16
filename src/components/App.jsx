import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';


const Registration = lazy(() => import('../pages/Registration/Registration'));
const Participants = lazy(() => import('../pages/Participants/Participants'));
const Board = lazy(() => import('../pages/Board/Board'));

export const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Board />} />
        <Route path="/:id/registration" element={<Registration />} />
        <Route path="/:id/participants" element={<Participants />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
