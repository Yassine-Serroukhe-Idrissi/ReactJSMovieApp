import React,{useState} from "react";
import './Movie.css'



export default function Movies({movie}){
    const [detail,setDetail] = useState(false);
    const handleClick = () => {
        setDetail(!detail)
    }

    return(
        <div className="row">
            <div className="column">
                <center>
                    <h1>{movie.title}</h1>
                    <img src={"http://image.tmdb.org/t/p/w500/"+ movie.poster_path} alt={movie.title}/>
                </center>
                
            </div>
        </div>
        
    )
}