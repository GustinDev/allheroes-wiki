import { Route, Routes, Navigate } from 'react-router-dom';
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import LoginPage from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/marvel' />}></Route>
        <Route path='marvel' element={<MarvelPage />}></Route>
        <Route path='dc' element={<DcPage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};
