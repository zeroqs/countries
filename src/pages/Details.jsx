import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';
import { fetchByCountry} from "../store/slices/CountrieSlice.js";
import {useDispatch, useSelector} from "react-redux";
import '../assets/styles/details/details.scss'
import InfoByCountry from "../components/InfoByCountry/InfoByCountry.jsx";

const Details = () => {
    let { name } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const country = useSelector(state => state.countries.country)

    useEffect( () => {
        dispatch(fetchByCountry(name))

    }, [name]);
    return (
        <div>
            <button className="button__back" onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </button>
            <h3>Country {name}</h3>
            {country && (
                <InfoByCountry country={country}/>
            )}
        </div>
    );
};

export default Details;
