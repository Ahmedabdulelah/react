import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function PostDetails(){

    const [post, setPost] = useState({})
    

    const {postId} = useParams()


        useEffect(()=>{
                async function FetchPostDetails(){
                    try{
                        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                        const data = await response.json()
                        setPost(data)
                    }
                    catch(error){
                        console.log(error)
                    }
                }

                FetchPostDetails()
            },[postId])
    
    return(
        <>
            <h1>Post Details Page</h1>
            <h2>This is Post Number {post.id} </h2>
            <p>{post.body}</p>
        </>
        )
    }
