import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import DocumentPage from "./pages/DocumentPage";
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'
import Kenya from './pages/Destinations/kenya/index'
import Tanzania from './pages/Destinations/Tanzania'
import Uganda from './pages/Destinations/Uganda'
import Rwanda from './pages/Destinations/Rwanda'
import Zanzibar from './pages/Destinations/Zanzibar'
import SearchResults from './pages/SearchResults'
import AdminUploadsPage from './pages/Admin/adminUploads/AdminUpload';
import AdminIndexPage from './pages/Admin/Index'
import AdminLogin from './pages/Admin/Login'
import AdminJournalPage from './pages/Admin/Journals/JournalPage'
import AdminReviewsPage from './pages/Admin/ReviewPage'
import AdminSafarisPage from './pages/Admin/Safaris'

import ProtectedRoute from './pages/Admin/ProtectedRoute'
import BookingPage from "./pages/booking/BookingPage";
import Bookings from './pages/Admin/booking/Booking';

// New imports for Journals and Reviews
import JournalsPage from './pages/Journals/index'
import JournalDetail from './pages/Journals/JournalDetail'
import ReviewsPage from './pages/Reviews/index'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/journals/:id" element={<JournalDetail />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/:section/:footerName" element={<DocumentPage />} />
        <Route path='/destinations/kenya/*' element={<Kenya/>}/>
        <Route path='/destinations/tanzania/*' element={<Tanzania />}/>
        <Route path='/destinations/uganda/*' element={<Uganda />}/>
        <Route path='/destinations/rwanda/*' element={<Rwanda />}/>
        <Route path='/destinations/zanzibar/*' element={<Zanzibar />}/>
        <Route path='/admin' element={<ProtectedRoute><AdminIndexPage/></ProtectedRoute>}/>
        <Route path='/admin/uploads' element={<ProtectedRoute><AdminUploadsPage/></ProtectedRoute>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/journal' element={<ProtectedRoute><AdminJournalPage/></ProtectedRoute>}/>
        <Route path='/admin/reviews' element={<ProtectedRoute><AdminReviewsPage/></ProtectedRoute>}/>
        <Route path="/admin/bookings"element={<ProtectedRoute><Bookings/></ProtectedRoute>}/>
        <Route path="/admin/safaris" element={<ProtectedRoute><AdminSafarisPage/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
