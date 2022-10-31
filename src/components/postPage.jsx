import Loading from "./loading";
import {NavLink} from 'react-router-dom'

export default function PostPage({isLoading,currentPost, prev, next, paginate, pageNumbers}){


    return(
        <section className="postPage">
            <h2>Posts</h2>
            <ul>
            {isLoading ? currentPost.map((post) => {
                return(
                        <li key={post.id}>
                            {post.title}
                        </li>
                )
            }) : <Loading /> }
            </ul>
            <ul className="pagination">
                
                <li onClick={prev}>Prev</li>
                {/* <NavLink to=""> */}
                   {pageNumbers.map((number) => {
                    return(<li key={number} onClick={() => {paginate(number)}}>
                     {number}
                    </li>)
                })} 
                {/* </NavLink> */}
                
                <li onClick={next}>Next</li>
            </ul>
        </section>
    )
}