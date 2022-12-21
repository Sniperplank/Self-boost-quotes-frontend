import { ThemeProvider } from '@mui/material';
import About from './components/About';
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
      <div className="App">
        <NavBar />
        <GenerateQuote />
        <Api />
        <ApiWithId />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
