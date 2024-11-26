import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Gallery from './pages/Gallery';
import ChatbotPage from './pages/ChatbotPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* 라우트 설정 */}
        <Routes>
          {/* LoginPage를 기본 페이지로 설정 */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/courses" element={<EventPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}