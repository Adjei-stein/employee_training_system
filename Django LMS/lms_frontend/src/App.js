import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Navbar from './components/MainNav'
import Footer from './components/Footer'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import ReactDOM from 'react-dom'
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion, faArrowRight, faArrowUp, faFileLines, faPenToSquare, faEye, faEyeSlash, faUser, faScrewdriverWrench, faPowerOff, faBookmark } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion, faArrowRight, faArrowUp, faFileLines, faPenToSquare, faEye, faEyeSlash, faUser, faScrewdriverWrench, faPowerOff, faBookmark)


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/details/:course_id" element={<CourseDetails />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
