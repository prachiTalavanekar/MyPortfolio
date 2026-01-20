import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Admin Routes (no navbar/footer) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            {/* Public Routes (with navbar/footer) */}
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Home />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/about" element={
              <>
                <Navbar />
                <main>
                  <About />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/education" element={
              <>
                <Navbar />
                <main>
                  <Education />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/experience" element={
              <>
                <Navbar />
                <main>
                  <Experience />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/skills" element={
              <>
                <Navbar />
                <main>
                  <Skills />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/projects" element={
              <>
                <Navbar />
                <main>
                  <Projects />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/resume" element={
              <>
                <Navbar />
                <main>
                  <Resume />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/certifications" element={
              <>
                <Navbar />
                <main>
                  <Certifications />
                </main>
                <Footer />
              </>
            } />
            
            <Route path="/contact" element={
              <>
                <Navbar />
                <main>
                  <Contact />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;