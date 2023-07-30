import { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Protected from './pages/Protected';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './components/RequireAuth';
import HeroImg from './pages/HeroImg';

const App: FC = () => {
  const [showHeroImage, setShowHeroImage] = useState(true);

  return (
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<HeroImg showHeroImage={showHeroImage} setShowHeroImage={setShowHeroImage} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth allowedRoles={['user']} />}>
            <Route path="/protected" element={<Protected />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
      </AuthProvider>
  );
};

export default App;
