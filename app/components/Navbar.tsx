import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">
                <Link href="/"> biosrc </Link>
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link href="/textbooks">Textbooks</Link>
            </li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar