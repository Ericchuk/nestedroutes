import home from "./images/home.png";
import users from "./images/group.png";
import post from "./images/post.png";

export default function Sidebar({ NavLink, showNav, toggleNav }) {
  const navArr = [
    { link: "/", altText: "Home", icon: home },
    { link: "/users", altText: "users", icon: users },
    { link: "/post", altText: "posts", icon: post },
  ];


  const navItem = navArr.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.link} className="a">
          <img src={item.icon} alt={item.altText} />
          <p>{item.altText}</p>
        </NavLink>
      </li>
    );
  });

  const social = [{a:'facebook.com', img:'F'},{a:'github.com/erichuk', img:'Git'},{a:'twitter.com', img:'T'}];

  const socialLinks = social.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.a}>
          <p>{item.img}</p>
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
