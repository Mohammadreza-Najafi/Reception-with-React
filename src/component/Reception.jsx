import {Link} from 'react-router-dom'

const Reception = ({image, name, id, info, glass}) => {

    return (
        <article className='cocktail'>

            <div className='img-container'>
                <img src={image} alt={name}/>
            </div>

            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/reception/${id}`} className="btn btn-primary btn-details">
                    details
                </Link>
            </div>

        </article>
    )


}

export default Reception