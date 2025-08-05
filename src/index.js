import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import './css/fontawesome.min.css';
import './css/magnific-popup.min.css';
import './css/swiper-bundle.min.css';
import './css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Restore original route after 404.html redirect
const redirectPath = sessionStorage.getItem('redirect');
if (redirectPath) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirectPath);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
