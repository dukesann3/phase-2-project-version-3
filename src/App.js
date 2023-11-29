import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom";
import './css/app.css';

function App() {

  return (
    <>
      <Navbar />
      <div className='flex-container'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
