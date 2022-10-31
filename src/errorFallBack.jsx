import {Link} from 'react-router-dom';



export default function ErrorFallback({error}){
    return(
        <section className="errorFallBack">
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <Link to ="/">Go Home</Link>
        </section>
    )
}