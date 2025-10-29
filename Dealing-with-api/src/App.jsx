import './App.css'
import Post from './Component/post'
import { Route,Routes,Link } from 'react-router-dom'
import PostDetails from './Component/PostDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Post/>} />
      <Route path='/postDetails/:postId' element={<PostDetails/>} />
    </Routes>
  )
}

export default App
