import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Mentorship from './pages/Mentorship';
import Support from './pages/Support';
import Testimonials from './pages/Testimonials';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';

// New pages
import GetStarted from './pages/GetStarted';
import EventRegistration from './pages/EventRegistration';
import MentorshipRequest from './pages/MentorshipRequest';
import NewGoal from './pages/NewGoal';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/register/:eventId" element={<EventRegistration />} />
          <Route path="/events/register" element={<EventRegistration />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/mentorship/request" element={<MentorshipRequest />} />
          <Route path="/support" element={<Support />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/goals/new" element={
            <ProtectedRoute>
              <NewGoal />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Admin routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute roles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          } />
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
