import {IoMoonOutline, IoMoon} from 'react-icons/io5'

const SwitchTheme = ({theme,toggleTheme}) => {
    return (
        <div onClick={toggleTheme} className="switch-theme">
            { theme === "Light" ? <IoMoonOutline/> : <IoMoon/>}
            <span>{theme} mode</span>
        </div>
    );
};

export default SwitchTheme;
