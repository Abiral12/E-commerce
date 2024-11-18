import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './Pages/MainRoutes';
import './App.css';
import './input.css';
function App() {


    return (
  
      <BrowserRouter>
      <MainRoutes />
      </BrowserRouter>
    )
  }
  
  export default App