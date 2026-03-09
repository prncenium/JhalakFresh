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
import ContactUs from './pages/ContactUs'
import Team from './pages/Team'
import WorkWithUs from './pages/WorkWithUs'
import BooksPage from './pages/Book'
import PlansPage from './pages/PlansPage'
import AdultPlans from './pages/AdultPlans'
import KidsPlans from './pages/KidsPlans'
import RealPlansPage from './pages/RealPlansPage'
import RealAdultPlans from './pages/RealAdultPlans'
import RealKidsPlans from './pages/RealKidsPlans'


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

            <Route path='/pricing' element={<RealPlansPage />} />
            <Route path='/real-adult-plans' element={<RealAdultPlans />} />
            <Route path='/real-kids-plans' element={<RealKidsPlans />} />

            <Route path='/plans' element={<PlansPage />} />
            <Route path='adult-plans' element={<AdultPlans />} />
            <Route path='kids-plans' element={<KidsPlans />} />
            
            {/* The /blogs URL loads the new BlogList page */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path='/videos' element={<VideoList />} />
            <Route path='/documents' element={<DocumentList />} />
            <Route path='/books' element={<BooksPage />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/team' element={<Team />} />
            <Route path='/work-with-us' element={<WorkWithUs />} />
          </Routes>
        </div>

        {/* The Footer stays at the bottom of EVERY page */}
        <Footer />
        
      </main>
    </Router>
  )
}

export default App