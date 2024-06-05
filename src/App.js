import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/main"  element={<Main />} />
      </Routes>
  </Router>
  );
}

export default App;
