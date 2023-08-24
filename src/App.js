
import { Route, Router, Routes } from 'react-router-dom';

import Searchjob from "./searchjob/Searchjob";
import Applicationmain from './aplica/Aplicationmain';
import Dashboardmain from './dashboardf/Dashboardmain';
import Pageloginmain from './loginpage/Pageloginmain';
import Companiesmain from './companies/Companiesmain';
import Profilemain from './profile/Profilemain';
import Chartmain from './chart/Chartmain';
import Pagelockmain from './pagelock/pagelockmain';
import Pageregsmain from './pageregistration/Pageregistrationmain';
import Profilepage2main from './profile2/Profilepage2main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboardmain />} />
        <Route path='/searchjob/Searchjob' element={<Searchjob />} />
        <Route path='/aplica/Aplicationmain' element={<Applicationmain />} />
        <Route path='/loginpage/Pageloginmain' element={<Pageloginmain />}/>
        <Route path='/companies/Companiesmain' element={<Companiesmain/>}/>
        <Route path='/profile/Profilemain'  element={<Profilemain/>}/>
        <Route path='/chart/Chartmain' element={<Chartmain/>}/>
        <Route path='/pagelock/pagelockmain' element={<Pagelockmain/>}/>
        <Route path='/pageregistration/Pageregistrationmain' element={<Pageregsmain/>}/>
        <Route path='/profile2/Profilepage2main' element={<Profilepage2main/>}/>
      </Routes>
    </>
  );
}

export default App;
