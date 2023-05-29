import { Route, Routes } from 'react-router-dom';
// COMPONENTS & ROUTES
import LoginPage from '../auth/pages/LoginPage';
import HeroesRouter from '../heroes/routes/HeroesRouter';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='/*' element={<HeroesRouter />}></Route>
      </Routes>
    </div>
  );
};
