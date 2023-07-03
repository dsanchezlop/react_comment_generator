// React Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
// Components
import { App } from '@/components/App'
// Styles
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
