import { FC, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import HeroImg from "./pages/HeroImg";
import UserDashboard from "./pages/UserDashboard";
import Layout from "@/components/Layout";
import Test from "./pages/Test";
import CreateCourse from "./pages/CreateCourse";

const App: FC = () => {
  const [showHeroImage, setShowHeroImage] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HeroImg
                showHeroImage={showHeroImage}
                setShowHeroImage={setShowHeroImage}
              />
            }
          />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route element={<RequireAuth allowedRoles={["user"]} />}>
            <Route path="/protected" element={<Protected />} />
            <Route path="/test" element={<Test />} />
            <Route path="/create" element={<CreateCourse />} />
            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
