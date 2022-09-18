import { useParams } from "react-router-dom";
import { useEffect  } from 'react';
import { useState } from 'react';
 
function Detail() {

    const [loding, setLoding ] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();


    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
       
        console.log(movie)
        setMovie(json.data.movie);
        setLoding(false)
    }

    useEffect(() => { 
        getMovie();
    },[])
   
    return (
        <div>
            {
                loding ?
                    <h2>loding...Detail. </h2>
                    : 
                    <div>
                        {
                            Object.keys(movie).length === 0 || movie === null ? "조회된 데이터가 없습니다"
                                :
                                <div>
                                    <h1>{movie.title}</h1>
                                    <img src={movie.medium_cover_image} alt="" />
                                </div>
                        }
                    </div>
                    
            }
        </div>    
    )
}

export default Detail;