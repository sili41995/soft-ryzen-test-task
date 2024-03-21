import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';

const HomePage = lazy(() => import('@/pages/HomePage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
