import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './Component/MainComponent';


function App() {
  return (
    <BrowserRouter> 
       <Main></Main>
    </BrowserRouter>
  );
}

export default App;
