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
import AdminResetPasswordPage from './pages/Admin/ResetPassword'
import AdminJournalPage from './pages/Admin/JournalPage'
import AdminReviewsPage from './pages/Admin/ReviewPage'
import ProtectedRoute from './pages/Admin/ProtectedRoute'


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
        <Route path="/:section/:footerName" element={<DocumentPage />} />
        <Route path='/destinations/kenya/*' element={<Kenya/>}/>
        <Route path='/destinations/tanzania/*' element={<Tanzania />}/>
        <Route path='/destinations/uganda/*' element={<Uganda />}/>
        <Route path='/destinations/rwanda/*' element={<Rwanda />}/>
        <Route path='/destinations/zanzibar/*' element={<Zanzibar />}/>
        <Route path='/admin' element={<ProtectedRoute><AdminIndexPage/></ProtectedRoute>}/>
        <Route path='/admin/uploads' element={<ProtectedRoute><AdminUploadsPage/></ProtectedRoute>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/reset' element={<AdminResetPasswordPage/>}/>
        <Route path='/admin/journal' element={<ProtectedRoute><AdminJournalPage/></ProtectedRoute>}/>
        <Route path='/admin/reviews' element={<ProtectedRoute><AdminReviewsPage/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
