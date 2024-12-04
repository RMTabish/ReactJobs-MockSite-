
import {Route,createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import JobPgaes from './pages/JobPgaes';

const router =createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<MainLayout/>}>
      <Route index element = {<HomePage/>}/>
      <Route path='/jobs' element = {<JobPgaes/>}/>
      
      <Route path='*' element = {<NotFound/>}/>
      
     </Route>
  )

);
const App =()=>{

  return <RouterProvider router={router}/>




};

export default App;

