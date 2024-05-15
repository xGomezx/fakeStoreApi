import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from '../src/components/Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<ShopProvider><App /></ShopProvider>)
