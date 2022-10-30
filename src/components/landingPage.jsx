import Sidebar from './sidebar';
import Header from './header';
import HomePage from './homePage';
import UsersPage from './usersPage';
import PostPage from './postPage';
import Error404 from './errorPage';
import ReadMore from './readMoreRoute';
import {Routes,Route, NavLink, Link} from 'react-router-dom';
import {useState, useEffect} from "react";

export default function LandingPage(){
    const [showNav, setShowNav] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(false);
    

    useEffect(() => {
        async function getData(){
            try{
                setUserLoading(true)
                const data = await fetch('https://randomuser.me/api/?results=100');
                const response = await data.json();
                setUsers(response.results);
            }catch(err){
                setUserLoading(false)
                console.log(err);
            }
        }

        getData();
    }, [])


    useEffect(() =>{
        async function getPost(){
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await data.json();
                setPosts(response);
                setIsLoading(true);
            }catch(err){
                setIsLoading(false);
                console.log(err);
            }
        }
        getPost();
    }, [])
    
    function toggleNav(){
        setShowNav(!showNav);
    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];


    for(let i = 1; i < Math.ceil(posts.length  / postsPerPage); i++){
        pageNumbers.push(i);
    }

    // change page 
    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

    // prev 
    function prev(e){
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }else{
            e.target.disabled = true;
        }
    }

    // next 
    function next(e){
        if(currentPage < pageNumbers.length){
            setCurrentPage(currentPage + 1);
        }else{
            e.target.disabled = true;
        }
    }

    return(
        <article>
            <Header showNav={showNav} toggleNav={toggleNav} />
            <Sidebar NavLink={NavLink} showNav={showNav} toggleNav={toggleNav} />
            <Routes>
                <Route path="/" element={<HomePage />} >
                <Route path="/more" element={<ReadMore />} /> 
                </Route>
                <Route path="/users" element={<UsersPage users={users} userLoading={userLoading} currentUsers={currentUsers} prev={prev} next={next} paginate={paginate} pageNumbers={pageNumbers} NavLink={NavLink}/>} currentPage={currentPage} />
                <Route path="/post" element={<PostPage posts={posts} isLoading={isLoading} currentPost={currentPost} prev={prev} next={next} paginate={paginate} pageNumbers={pageNumbers}/>} />
                <Route path="*" element={<Error404 Link={Link} />} />
            </Routes>
        </article>
    )
}