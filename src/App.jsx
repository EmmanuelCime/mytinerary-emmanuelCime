import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import SideBar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import Home from "./Home.jsx"
import Cities from "./Cities.jsx"


function App() {

  return (
    <>
      <Router>
          <SideBar></SideBar>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Navigate to="/Home.jsx" replace />} />
            <Route path="/Home.jsx" element={<Home />} />
            <Route path="/Cities.jsx" element={<Cities />} />
          </Routes>
      </Router>
    </>
  )
}


export default App