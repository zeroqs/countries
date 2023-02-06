import './../../../assets/styles/countryList/card.scss'

const Card = ({img, name, info = [],onClick}) => {


    return (
        <article onClick={onClick} className="card">
            <img className="card__image" src={img} alt={name}/>
            <section className="card__body">
                <h3 className="card__title">{name}</h3>
                <ul className="card__list">
                    {info.map((el) => (
                        <li className="card__list-item" key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Card;
