import './App.css'
// import { useState } from 'react'
import Post from './Component/post'
import { Route,Routes,Link } from 'react-router-dom'
import PostDetails from './Component/PostDetails'
import { PostsContext } from './Context/PostContext'
import axios from 'axios'
import { useEffect,useState } from 'react'
import NotFound from './Component/NotFound'

function App() {

  const [posts, setPosts] = useState([])
  
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response){
      setPosts(response.data)
    })
  },[])
    // console.log(posts)

  return (
    <PostsContext.Provider value={posts}>
    <Routes>
      <Route path='/' element={<Post/>} />
      <Route path='/postDetails/:postId' element={<PostDetails/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </PostsContext.Provider>
  )
}

export default App
