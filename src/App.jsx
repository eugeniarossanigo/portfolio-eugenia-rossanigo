import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import JobsContainer from './components/JobsContainer';
import AboutContainer from './components/AboutContainer';

function App() {
  return (
    <div id='main-layout' className='font-montserrat'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Welcome />
              <ProjectContainer />
              <JobsContainer />
              <AboutContainer />
              {/* <main className='flex flex-row'>
                <Container />
                <Container />
              </main> */}
            </>
          } />
          {/* <Route path='/projects' element={<Projects />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
