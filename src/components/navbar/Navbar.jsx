import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <Link href="" className="logo">
          <img src="/logo.png" alt="" />
          <span>ElementalEstates</span>
        </Link>
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link href="">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
            <span className="userName">Arun Gupta</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link href="">Sign in</Link>
            <Link href="" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="./menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <Link href="">Agents</Link>
          <Link href="">Sing in</Link>
          <Link href="">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
