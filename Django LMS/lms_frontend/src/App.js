import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Navbar from './components/MainNav'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion)


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
