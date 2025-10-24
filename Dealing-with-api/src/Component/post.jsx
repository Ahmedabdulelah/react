import { Link } from "react-router-dom"
import { PostsContext } from "../Context/PostContext"
import { useContext } from "react"


export default function Post(){

    const posts = useContext(PostsContext)
    const postList = posts.map((p) => {
        return(
            <Link key={p.id} to={`/postDetails/${p.id}`}>
            <div style={{border:"1px solid #444"}}>
                <h1>
                    Title Of Post {p.id} 
                </h1>
                <h2 style={{color:"#432"}}>
                    {p.title}
                </h2>
                <hr />
            </div>
            </Link>
        )
    })


    return(
        <>
        {postList}
        </>
    )
}