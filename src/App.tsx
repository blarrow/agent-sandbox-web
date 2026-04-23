
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css';

// 懒加载组件
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FunctionalityPage = lazy(() => import('./components/FunctionalityPage'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Suspense fallback={<div className="py-16"></div>}>
        <Features />
        
        {/* Functionality Page */}
        <FunctionalityPage />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* About Section */}
        <About />
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App
