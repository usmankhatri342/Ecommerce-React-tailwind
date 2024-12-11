import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/Store/Store.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider  store={store}>
     <BrowserRouter 
           future={{
            v7_startTransition: true,
          }}>
           
    <App />
    </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
