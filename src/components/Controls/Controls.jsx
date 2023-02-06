import Search from "./Search/Search.jsx";
import CustomSelect from "./CustomSelect/CustomSelect.jsx";
import {useEffect} from "react";
import {OnFilter} from "../../store/slices/CountrieSlice.js";
import {useDispatch, useSelector} from "react-redux";

const Controls = () => {
    const dispatch = useDispatch()
    const region = useSelector(state => state.countries.region)
    const search = useSelector(state => state.countries.search)

    useEffect(() => {
        dispatch(OnFilter())
    }, [region,search]);

    return (
        <section className="controls">
            <Search />
            <CustomSelect />
        </section>
    );
};

export default Controls;
