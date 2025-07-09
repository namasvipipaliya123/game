import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./i18n";


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


import App from './App';
import AuthPage from './pages/AuthPage';
import LotteryPage from './pages/LotteryPage'; 
import GameCatalog from './pages/GameCatalog';
import GameRecommendationPage from './pages/GameRecommendationPage';

import LanguagePage from "./pages/LanguagePage";
import AnnouncementPage from "./pages/AnnouncementPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import GuidePage from "./pages/GuidePage";
import AboutPage from "./pages/AboutPage";
import DownloadPage from "./pages/DownloadPage";
import AccountPage from './pages/AccountPage';
import Confidentiality from './pages/Confidentiality';
import RiskDisclosurePage from './pages/RiskDisclosurePage';
import ActivityPage from './pages/ActivityPage';
import WingoPage from './pages/WingoPage';
import K3GamePage from './pages/K3GamePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },

    { path: "/auth", element:<AuthPage />},
  { path: "/lottery", element: <LotteryPage /> },
 { path: "/all-games", element: <GameCatalog /> },
  { path: "/all-recommendations", element: <GameRecommendationPage />},
  { path: "/language", element: <LanguagePage /> },
{ path: "/announcement", element: <AnnouncementPage /> },
{ path: "/customer-service", element: <CustomerServicePage /> },
{ path: "/guide", element: <GuidePage /> },
{ path: "/about", element: <AboutPage /> },
{ path: "/download", element: <DownloadPage /> },
{ path:"/account", element:<AccountPage />},
{ path: "/confidentiality", element:<Confidentiality />},
{ path: "/risk-disclosure", element:<RiskDisclosurePage />},
{ path: "/activity", element:<ActivityPage />},
{ path: "/wingo/:time", element:<WingoPage />},

{ path: "/k3", element:<K3GamePage />}

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
reportWebVitals();