import classes from './Header.module.css'

const Header = () => {
    return (
        <div class="banner-image" style="background-image: url(./assets/images/Banner-Warehouse-Ceiling.jpeg); 
        background-repeat: no-repeat;background-attachment: fixed; background-size:contain;">
            <div className="nav-wrapper pageTitle">
                <header id="home">
                    <h1>Julie <span className="Chu">Chu</span></h1>
                    <nav role="navigation" aria-label="navigation menu">
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#resume">Resume</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header