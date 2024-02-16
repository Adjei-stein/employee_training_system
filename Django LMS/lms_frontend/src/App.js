import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import Navbar from './components/MainNav'
import Footer from './components/Footer'
import Courses from './components/Courses'
import CourseInfo from './components/CourseInfo'
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import CourseDetails from './components/CourseDetails';
import Home from './components/Home';
import Help from './components/Help';
import ReactDOM from 'react-dom'
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion, faArrowRight, faArrowUp, faFileLines, faPenToSquare, faEye, faEyeSlash, faUser, faScrewdriverWrench, faPowerOff, faBookmark } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHouse, faSquarePollVertical, faBookOpen, faCircleQuestion, faArrowRight, faArrowUp, faFileLines, faPenToSquare, faEye, faEyeSlash, faUser, faScrewdriverWrench, faPowerOff, faBookmark)


function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <div className="App">
      {!isAuthPage && <Navbar />}
        {!isAuthPage && (<div style={!isAuthPage ? {paddingBottom: "8rem", paddingTop: "4rem", minHeight: "100%"} : {}}>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/courses" element={<Courses />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/course-info/:course_id" element={<CourseInfo />} />
            <Route path="/course-details/:course_id" element={<CourseDetails />} />
            <Route path="/help" element={<Help />} />
          </Routes>

        </div>)}
      { isAuthPage &&
        (
          <div className="auth-page">
          <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes></div>)
      }
      
      
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
