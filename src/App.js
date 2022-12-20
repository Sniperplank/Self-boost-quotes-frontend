import { ThemeProvider } from '@mui/material';
import Api from './components/Api';
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
        <code>hello</code>
      </div>
    </ThemeProvider>
  );
}

export default App;
