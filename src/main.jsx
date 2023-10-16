import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/navbar.jsx';
import Intro from './component/Intro.jsx';
import Aboutme from './component/aboutme.jsx';
import Service from './component/services.jsx';
import Recentworks from './component/recentworks.jsx';
import Footer from './component/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
      <Navbar />
      <Intro />
      <Aboutme />
      <Service/>
      <Recentworks/>
      <Footer />

        
    </div>

  </React.StrictMode>,
);