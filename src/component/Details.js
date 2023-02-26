import React,{useEffect,useState} from "react";
import './Movie.css';

export default function Details({movie}){
    const [detail,setDetail] = useState([]);
    useEffect(() => {
        fetchDetail();
    });

    const fetchDetail = async () =>{
    const id = movie.id
    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=d3f533569e4685f6cd79f8c0a2e8c234"
    const data = await fetch(url)
    const details = await data.json();
    console.log(details["genres"]);
    setDetail(details);
  }


  
  return(
    <div className="row">
        <div className="column">
            <h3>Overview</h3>
            <center>
                <p>{detail["overview"]}</p>
            </center>
            <h3>Budget</h3>
            <center>
                <p>{detail["budget"]}</p>
            </center>
            <h3>Genre</h3>
            {detail["genres"]?.map((g)=>{return(<li key={g.id}>{g.name}</li>)})}
            <h3>Production Company</h3>
            {detail["production_companies"]?.map((pc)=>{
                return(
                    <div>
                        <h4>{pc.name}</h4>
                        <img src={"http://image.tmdb.org/t/p/w500/"+ pc.logo_path} alt={pc.id}/>
                    </div>
                )
            })}
            <h3>AvErage vote : {detail["vote_average"]}</h3>
            <h3>Vote Count : {detail["vote_count"]}</h3>
        </div>
    </div>
    
)
}