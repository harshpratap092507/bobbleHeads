import { Outlet } from 'react-router-dom';
import './components/Header/Header.jsx';
import Header from './components/Header/Header.jsx';

const App=()=> {
  
  return (
   <div className="app">
  <main>
  <Header/>
  <Outlet/>
  </main>

   </div>
  )
}

export default App
