
import Controls from "../components/Controls/Controls.jsx";
import List from "../components/CountryList/List.jsx";
import Card from "../components/CountryList/Card/Card.jsx";

import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

const Homepage = () => {
    const navigate = useNavigate();
    const countries = useSelector(state => state.countries.filteredCountries)

    return (
        <>
            <Controls/>
            <List>
                {countries.map((el) => {
                    const countryInfo = {
                        img: el.flags.png,
                        name: el.name.common,
                        info: [
                            {
                                title: 'Population',
                                description: el.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: el.region,
                            },
                            {
                                title: 'Capital',
                                description: el.capital,
                            },
                        ],
                    };
                    return (
                        <Card
                            key={el.name.common}
                            {...countryInfo}
                            onClick={() => navigate(`/country/${el.name.common}`)}

                        />
                    );
                })}
            </List>
        </>
    );
};

export default Homepage;
