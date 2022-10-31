import Loading from "./loading"

export default function UsersPage({currentUsers, userLoading, prev, next, pageNumbers, paginate, NavLink}) {
    return (
        <section className="user">
            <h2>Users</h2>
            {userLoading ? currentUsers.map((user, index) => {
                return(
                    <aside key={index}>
                        <img src={user.picture.large} alt="user" />
                        <h3>{user.name.first} {user.name.last}</h3>
                        <p className="email">{user.email}</p>
                        <p>{user.phone}</p>
                    </aside>
                )
            }) : <Loading />}

        <ul className="pagination">
                <li onClick={prev}>Prev</li>
                {pageNumbers.map((number) => {
                    return(
                        
                    <li key={number} onClick={() => {paginate(number)}}>
                       
{number}
                    </li>
                    
                    )
                })}
                <li onClick={next}>Next</li>
            </ul>
        </section>
    )
}