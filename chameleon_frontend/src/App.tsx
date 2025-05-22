import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChameleonDataset from './components/chameleon-dataset';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GOOGLE_ANALYTICS_TRACKING_ID = "G-F24QNGB66Y";
// const GOOGLE_ANALYTICS_TRACKING_ID = "G-F24QNGB66Y";


function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
    // Log the first page load
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  
  return (
    <>
      <ChameleonDataset />
    </>
  )
}

export default App
