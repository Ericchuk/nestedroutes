export default function Error404({Link}){
    return(
        <section className="error404">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to ="/">Go Home</Link>
        </section>
    )
}