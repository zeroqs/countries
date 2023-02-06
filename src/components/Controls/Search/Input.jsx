import {useDispatch, useSelector} from "react-redux";
import {OnSearch} from "../../../store/slices/CountrieSlice.js";



const InputSearch = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.search)

    const handler = (e) => {
        dispatch(OnSearch(e.target.value))
    }




    return (
        <div>
            <input onChange={handler} value={countries} className="search-input" type="text"/>
        </div>
    );
};

export default InputSearch;
