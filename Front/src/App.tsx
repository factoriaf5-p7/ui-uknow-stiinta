import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

