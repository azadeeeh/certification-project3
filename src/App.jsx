import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

/**
 * Importing other components
 */
import Home from './components/Home'
import TaskMng from './components/TaskMng'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/taskMng">Task Manager</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            Furthermore, notice how the content above always renders? On each page? */}
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/taskmng" element={<TaskMng />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
