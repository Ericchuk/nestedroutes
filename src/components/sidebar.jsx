import home from "./images/home.png";
import users from "./images/group.png";
import post from "./images/post.png";
import github from "./images/github.png";
import twitter from "./images/twitter-sign.png";

export default function Sidebar({ NavLink, showNav, toggleNav }) {
  const navArr = [
    { link: "/", altText: "Home", icon: home },
    { link: "/users", altText: "users", icon: users },
    { link: "/post", altText: "posts", icon: post },
  ];


  const navItem = navArr.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.link} style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })}>
          <img src={item.icon} alt={item.altText} />
          <p>{item.altText}</p>
        </NavLink>
      </li>
    );
  });

  const social = [{a:'https://github.com/Ericchuk', img:github},{a:'https://twitter.com/ericbraven', img:twitter}];

  const socialLinks = social.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.a}>
          <img src={item.img} alt={item.a}/>
        </a>
      </li>
    )
  })


  return (
    <nav className={showNav ? "slide" : ""} onClick={toggleNav}>
      <ul>{navItem}</ul>
      <ul className="socials">{socialLinks}</ul>
    </nav>
  );
}
