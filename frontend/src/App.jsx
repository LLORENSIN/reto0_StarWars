import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowPersonajes from './components/ShowPersonajes.jsx';
import CreatePersonaje from './components/CreatePersonaje.jsx';
import EditPersonaje from './components/EditPersonaje.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowPersonajes/>} />
          <Route path='/create' element={ <CreatePersonaje/>} />
          <Route path='/edit/:id' element={ <EditPersonaje/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;