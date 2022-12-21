import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddQuote from './components/AddQuote';
import Api from './components/Api';
import ApiWithId from './components/ApiWithId';
import Contact from './components/Contact';
import GenerateQuote from './components/GenerateQuote';
import NavBar from './components/NavBar';
import { darkTheme } from './darkTheme';

function App() {
  document.body.style.backgroundColor = '#090417'
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path='/' element={<div className="App">
          <NavBar />
          <GenerateQuote />
          <Api />
          <ApiWithId />
          <About />
          <Contact />
        </div>} />
        <Route path='/add_quote' element={<AddQuote />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
