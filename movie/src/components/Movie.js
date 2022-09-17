import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({id, coverImg, title, summary, generes }) { 
    return (
        <div>
        <img src={coverImg} alt={coverImg} />
        {/* <h2><Link to="/movie/:id" > {title} </Link> </h2> */}
            <h2><Link to={`/movie/${id}`} > {title} </Link> </h2>
            <p>{summary}</p>
                  <ul>
                    {generes.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
        </div>
    )
}

Movie.proTypes = {
    id : PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    generes : PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;