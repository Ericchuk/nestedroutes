export default function PostPage({posts, isLoading,currentPost, prev, next, paginate, pageNumbers}){


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
            }) : <h1>Loading...</h1> }
            </ul>
            <ul className="pagination">
                <li onClick={prev}>Prev</li>
                {pageNumbers.map((number) => {
                    return(<li key={number} onClick={() => {paginate(number)}}>
                     {number}
                    </li>)
                })}
                <li onClick={next}>Next</li>
            </ul>
        </section>
    )
}