import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 fixed w-full z-10 top-0">
      <div className="flex-1">
       
        <Link href="/" className="btn btn-ghost text-xl ml-4">
            <img src="/logo.png" className="h-7 mb-1" />
          {" "}
          biosrc{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/textbooks">Textbooks</Link>
          </li>
          <li>
            <Link href="/olympiads">Olympiads</Link>
          </li>
          <li>
            <Link href="/ap-ib">AP/IB</Link>
          </li>
          <li>
            <Link href="/textbooks">About</Link>
          </li>
          <li>
            <details>
              <summary>More Resources</summary>
              <ul className="p-2 bg-base-300 rounded-t-none">
                <li>
                  <Link href="https://www.usabo-trc.org/">Usabo</Link>
                </li>
                <li>
                  <Link href="https://biolympiads.com">Biolympiads</Link>
                </li>
                <li>
                  <Link href="https://www.bioly.guide/">Bioly.guide</Link>
                </li>
                <li>
                  <Link href="https://discord.gg/Q6NyxqgjM8">Discord</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
