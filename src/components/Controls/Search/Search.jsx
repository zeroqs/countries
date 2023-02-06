import {IoSearch} from 'react-icons/io5'
import InputSearch from "./Input.jsx";
import "../../../assets/styles/Controls/form.scss"

const Search = () => {

    return (
        <label className="input-container">
            <IoSearch/>
            <InputSearch />
        </label>
    );
};

export default Search;
