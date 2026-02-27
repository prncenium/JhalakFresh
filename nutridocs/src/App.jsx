import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// 1. Import your persistent layout components
import Navbar from './Sections/Navbar'
import Footer from './Sections/Footer'

// 2. Import your full-screen pages

import BlogList from './pages/Resources/Blogs/BlogList'

import Home from './pages/Home'
import VideoList from './pages/Resources/Videos/VideoList'
import DocumentList from './pages/Resources/Documents/DocumentList'

function App() {
  return (
    <Router>
      <main className='w-full min-h-screen flex flex-col'>
        
        {/* The Navbar stays at the top of EVERY page */}
        <Navbar />

        {/* The Routes determine which page content to load in the middle */}
        <div className="flex-grow">
          <Routes>
            {/* The root URL loads the Home page stack */}
            <Route path="/" element={<Home />} />
            
            {/* The /blogs URL loads the new BlogList page */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path='/videos' element={<VideoList />} />
            <Route path='/documents' element={<DocumentList />} />
          </Routes>
        </div>

        {/* The Footer stays at the bottom of EVERY page */}
        <Footer />
        
      </main>
    </Router>
  )
}

export default App