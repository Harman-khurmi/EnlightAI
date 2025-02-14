import { ThemeProvider } from "./components/SideBar/ThemeContext.jsx";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from "./components/Main/AuthContext";
import ContextProvider from "./config/GeminiContextAPI.jsx";


createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-mp6lm0yxvyunsvk7.us.auth0.com"
          clientId="kMKIQdsKvfbPAHG31zb1X6za7trmEGBm"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <AuthProvider>
            <App />
          </AuthProvider>
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  </ContextProvider>

)
