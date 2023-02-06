import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {searchByCode} from "../../fetch/fetch.jsx";


const InfoByCountry = ({country}) => {

    const navigate = useNavigate()

    const [neighbors, setNeighbors] = useState([]);
    useEffect(() => {
        if (country.borders && country.borders.length)
            axios
                .get(searchByCode(country.borders))
                .then(({ data }) => setNeighbors(data.map((c) => c.name.common)));
    }, [country.borders]);

    return (
        <section className="details">
            <img className="details__img" src={country.flags.png} alt={country.flags.alt}/>
            <div>
                <h1 className="details__title">{country.name.common}</h1>
                <div className="details__list-group">
                    <ul className="list">
                        <li className="list__item"><b>Population</b> {country.population}</li>
                        <li className="list__item"><b>Region:</b> {country.region}</li>
                        <li className="list__item"><b>Sub Region:</b> {country.subregion}</li>
                        <li className="list__item"><b>Capital:</b> {country.capital}</li>
                    </ul>
                    <div className="meta">
                        <b>Border Countries</b>
                        {country.borders ? !country.borders.length  ? (
                            <span>There is no border countries</span>
                        ) : (
                            <div className="tags">{neighbors.map((b) => (
                                <span className="tag" key={b} onClick={() => navigate(`/country/${b}`)}>
                                {b}
                            </span>
                            ))}</div>): <span>There is no border countries</span>}


                    </div>
                </div>
            </div>

        </section>
    );
};

export default InfoByCountry;
