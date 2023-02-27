import React from "react";
import { Link, useParams } from "react-router-dom";



export default function Movies({movie}){
    /*const [detail,setDetail] = useState(false);
     const handleClick = () => {
        setDetail(!detail)
    } */
    

    return(
        <div>
            <div>
                <center>
                    <Link to={`../movie/details/${movie.id}`}> 
                        <img src={"http://image.tmdb.org/t/p/w500/"+ movie.poster_path} alt={movie.title}/>
                    </Link>
                    <h1>{movie.title}</h1>
                </center>
                
            </div>
        </div>
        
    )
}