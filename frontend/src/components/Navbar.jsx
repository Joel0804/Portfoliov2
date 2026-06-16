function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="Name">
                Joel Dsilva
                </a>
            </div>
        <div className="navbar-right">
            < ul className="nav-links">
               <li>
                <a href="#projects">
                   Projects
                </a>
               </li>
               <li>
                <a href="#skills">
                    Skills
                </a>
               </li>
               <li>
                <a href="#contact">
                    Contact Me
                </a>
               </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar