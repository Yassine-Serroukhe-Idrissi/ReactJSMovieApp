import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { api_key } from "./api_key";
import { Link} from "react-router-dom";
/* import styles from './Movie.module.css'; */

export default function Details(){
    const [detail,setDetail] = useState([]);
    useEffect(() => {
        fetchDetail();
    });
    const { id } =  useParams()
    const fetchDetail = async () =>{
    console.log(id)
    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key
    const data = await fetch(url)
    const details = await data.json();
    console.log(details["genres"]);
    setDetail(details);
  }


  
  return(
    <div>
        <div  >
            <div >
                <img src={"http://image.tmdb.org/t/p/w500/"+ detail["poster_path"]} alt={detail["original_title"]}/>
                <div>
                    <center>
                        <p >{detail["overview"]}</p>
                    </center>
                    <center>
                        <div >
                            <h3>Budget :&nbsp;</h3> {detail["budget"]}$
                        </div>
                    </center>
                    <h3>Genre</h3>
                    {detail["genres"]?.map((g)=>{return(<li key={g.id}>{g.name}</li>)})}
                </div>
            </div>
            
            
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
                <Link to={`../movie/similar/${id}`}> 
                    <button>Similar</button>
                  </Link>
        </div>
    </div>
    
)
}