import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux";
import {OnRegion} from "../../../store/slices/CountrieSlice.js";

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const CustomSelect = () => {

    const dispatch = useDispatch()
    const region = useSelector(state => state.countries.region)
    const handler = (e) => {
        dispatch(OnRegion(e.value))
    }
    return (
        <Select
            isClearable={true}
            value={region}
            onChange={handler}
            className="select"
            placeholder={region ? region : "Filter by Region"}
            isSearchable={false}
            options={options}
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    cursor: 'pointer',
                    color: 'var(--colors-text)',
                    backgroundColor: state.isSelected
                        ? 'var(--colors-bg)'
                        : 'var(--colors-ui-base)',
                }),

            }}
        />
    );
};

export default CustomSelect;
