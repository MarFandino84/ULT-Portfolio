import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyles} from "./components/styles/GlobalStyles"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
)
