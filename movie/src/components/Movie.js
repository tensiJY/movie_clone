import PropTypes from "prop-types"

function Movie({ coverImg, title, summary, generes }) { 
    return (
        <div>
            <img src={coverImg}/>
            <h2>{title}</h2>
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
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    generes : PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;