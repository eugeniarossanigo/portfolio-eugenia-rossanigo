import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import JobsContainer from './components/JobsContainer';
import AboutContainer from './components/AboutContainer';

function App() {
  const [mode, setMode] = useState('dark')

  const handleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
      <div className={`w-full bg-insideBg font-montserrat flex justify-center text-baseColor ${mode === 'dark' ? 'theme-dark' : 'theme-light'}`}>
        <div id='main-layout' className='max-w-7xl flex flex-col justify-center items-center py-2 px-1 sm:px-3 lg:px-8'>
          <BrowserRouter>
            <Navbar handleMode={handleMode} mode={mode}/>
            <Routes>
              <Route path="/" element={
                <>
                  <Welcome />
                  <ProjectContainer />
                  <JobsContainer />
                  <AboutContainer />
                </>
              } />
              {/* <Route path='/projects' element={<Projects />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
  )
}

export default App
