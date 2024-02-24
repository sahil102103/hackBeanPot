import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// for testing, will clean up as I build
import Header from './assets/Header/header.js'
import Footer from './assets/Footer/footer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
)
