import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Index';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Roadmaps from './pages/Roadmaps';
import Scoreboard from './pages/Scoreboard';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/community" element={<Community />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}