import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PostsContext } from "../Context/PostContext"
import NotFound from "../Component/NotFound"

export default function PostDetails(){

    const posts = useContext(PostsContext)   
    const {postId} = useParams()

    const post = posts.find((p) =>{
        return (p.id == postId)
    })
    if(post){
    return(
        <>
            <h1>Post Details Page</h1>
            <h2>This is Post Number {post.id} </h2>
            <p>{post.body}</p>
        </>
        )
    }
    else{
        return(
            <>
            <NotFound/>
            </>
        )
    }

    
}