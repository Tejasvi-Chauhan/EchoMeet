import { Route , Routes , BrowserRouter as Router } from "react-router-dom";
import './App.css'
import LandingPage from './pages/Landing.jsx';
import Authentication from "./pages/Authentication.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import VideoMeetComponent from "./pages/VideoMeet.jsx";

function App() {
  return (
    <div>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element = {<LandingPage/>} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/:url" element={<VideoMeetComponent/>} />
      </Routes>
      </AuthProvider>
    </Router>
    </div>
   
  )
}

export default App
