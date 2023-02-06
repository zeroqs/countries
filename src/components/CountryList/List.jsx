import React from 'react';
import './../../assets/styles/countryList/list.scss'

const List = ({children}) => {
    return (
        <section className="CountryList">
            {children}
        </section>
    );
};

export default List;
