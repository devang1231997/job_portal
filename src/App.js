
import { Route, Router, Routes } from 'react-router-dom';

import Searchjob from "./searchjob/Searchjob";
import Applicationmain from './aplica/Aplicationmain';
import Dashboardmain from './dashboardf/Dashboardmain';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboardmain />} />
        <Route path='/searchjob/Searchjob' element={<Searchjob />} />
        <Route path='/aplica/Aplicationmain' element={<Applicationmain />} />
      </Routes>
      {/* <Nav/> */}
    </>
  );
}

export default App;
