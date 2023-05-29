import { Navbar } from '../../ui/components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DcPage } from '../../heroes/pages/DcPage';
import { MarvelPage } from '../../heroes/pages/MarvelPage';
import { HeroPage } from '../pages/HeroPage';
import { SearchPage } from '../pages/SearchPage';

const HeroesRouter = () => {
  return (
    <div>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Navigate to='/marvel' />}></Route>
          <Route path='marvel' element={<MarvelPage />}></Route>
          <Route path='dc' element={<DcPage />}></Route>
          <Route path='search' element={<HeroPage />}></Route>
          <Route path='hero' element={<SearchPage />}></Route>
          {/* SERCH AND ID */}
        </Routes>
      </div>
    </div>
  );
};

export default HeroesRouter;
