import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper #0091ea light-blue accent-4">
          <Link href="/">
            <a className="brand-logo left">Logo</a>
          </Link>
          <ul id="nav-mobile" className="right">
            <li className={isActive("/login")}>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className={isActive("/signUp")}>
              <Link href="/signUp">
                <a>Sign Up</a>
              </Link>
            </li>
            <li className={isActive("/create")}>
              <Link href="/create">
                <a>Create</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
