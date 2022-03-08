import classes from './Header.module.css'

const Header = () => {
    return (
      <header id="home">
      <h1>Julie <span class="Chu">Chu</span></h1>
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
                        </ul>
                    </nav>

      </header>
    );
  }

  export default Header