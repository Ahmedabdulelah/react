import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Post(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(1)
    const [search, setSearch] = useState("")
    

    useEffect(()=>{

        async function FetchPosts(){
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${limit}&_limit=10`)
                const data = await response.json()
                setPosts(prev => [...prev, ...data])
                setLoading(false)
            }
            catch(error){
                console.log(error)
            }
            
        }
        
        FetchPosts()

    },[limit])
    
    
    useEffect(()=>{
        async function SearchPost(){
            if(search == ""){
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${limit}&_limit=10`)
                const data = await response.json()
                setPosts(data)
            }
            else{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${search}`)
                const data = await response.json()
                setPosts(data)
                // console.log(data)
            }
        }
        SearchPost()
    }, [search])


        if(loading){return(<h1>Loading...</h1>)}


        return(
            <>
            <input onChange={(event)=> setSearch(event.target.value)} style={{margin:"10px"}} placeholder="Search here..." type="text" />


            {posts.length > 0 ? posts.map(post => (

            <Link style={{width:"100%"}} key={post.id} to={`/postDetails/${post.id}`}>
            <div style={{border:"1px solid #444"}}>
                <h1>
                    Title Of Post {post.id} 
                </h1>
                <h2 style={{color:"#432"}}>
                    {post.title}
                </h2>
                <hr />
            </div>
            </Link>
            ) 
            
            ): <p>No Posts</p>}
            <button onClick={() => setLimit(limit + 1)}>Load more...</button>
            </>
        )
    

}