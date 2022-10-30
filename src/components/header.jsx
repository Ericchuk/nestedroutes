import ham from "./images/hamburger.png";
import close from "./images/close.png";


export default function Header({showNav, toggleNav}) {
    return(
        <header>
            <div className="caller">
                <img src={ham} alt="ham" className={showNav ? "unshow" : ""} onClick={toggleNav} />
                <img src={close} alt="close" className={showNav ? "show" : "close"} onClick={toggleNav}/>
                <div className="logo">
                    <h1>HealthMatter</h1>
                </div>
            </div>
            <label>
                <input type="text" placeholder="Search" />
            </label>
        </header>
    )
}