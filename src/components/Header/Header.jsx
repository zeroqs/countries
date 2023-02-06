import Logo from "./Logo.jsx";
import SwitchTheme from "./SwitchTheme.jsx";
import '../../assets/styles/header/header.scss'
import {useEffect, useState} from "react";

const Header = () => {
    const [theme, setTheme] = useState('Light')

    const toggleTheme = () => setTheme(theme === 'Light' ? 'Dark' : 'Light' )

    useEffect(() => { document.body.setAttribute('data-theme', theme) }, [theme])

    return (
        <header>
            <section className="header header__container">
                <Logo/>
                <SwitchTheme theme={theme} toggleTheme={toggleTheme}/>
            </section>
        </header>
    );
};

export default Header;
