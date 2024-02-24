import React from 'react'
import ReactDOM from 'react-dom/client'
import {Text, View, StyleSheet} from 'react-native';

// import App from './App.jsx'
// import './index.css'

// for testing, will clean up as I build
import Header from './assets/Header/header.js'
import Footer from './assets/Footer/footer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <View>
    <Header />
    <Footer />
  </View>,
)
