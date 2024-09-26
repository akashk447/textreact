import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login'
import DefaultLayout from './components/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} name="login" element={<Login />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
