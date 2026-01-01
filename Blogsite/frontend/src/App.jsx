import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './mainLayout'
import About from './pages/About'
import Category from './pages/Category'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CreateBlog from './pages/CreateBlog'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/category' element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            } />
            <Route path='/blog' element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create-blog' element={<CreateBlog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
