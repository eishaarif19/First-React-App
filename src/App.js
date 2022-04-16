import './App.css';
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import About from './Components/About'
import Gallery from './Components/Gallery'

import { ThemeProvider, createTheme } from '@material-ui/core/styles'

import 'fontsource-lora';

const theme = createTheme({

  palette: {
    primary: {
      main: '#CAF44D',
    },
    secondary: {
      main: '#7A9626'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <div className='App-header' margin="auto">
          <NavBar />
          <Intro />
          <About />
          <Gallery />
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;
