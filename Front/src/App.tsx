import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Protected from './pages/Protected';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './components/RequireAuth';

const App: FC = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireAuth allowedRoles={['user']} />}>
        <Route path="/protected" element={<Protected />} />
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

