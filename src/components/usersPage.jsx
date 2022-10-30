export default function UsersPage({currentUsers, userLoading, prev, next, pageNumbers, paginate, NavLink}) {
    return (
        <section className="user">
            {userLoading ? currentUsers.map((user, index) => {
                return(
                    <aside key={index}>
                        <img src={user.picture.large} alt="user" />
                        <h3>{user.name.first} {user.name.last}</h3>
                        <p className="email">{user.email}</p>
                        <p>{user.phone}</p>
                    </aside>
                )
            }) : <h1>Loading...</h1>}

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