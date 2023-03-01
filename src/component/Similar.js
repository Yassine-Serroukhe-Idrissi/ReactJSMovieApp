import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { api_key } from "./api_key";

export default function Similar(){
    const [similar,setSimilar] = useState([]);
    useEffect(() => {
        fetchSimilar();
    });
    const { id } =  useParams()
    const fetchSimilar = async () =>{
    console.log(id)
    const url = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+api_key
    const data = await fetch(url)
    const similar = await data.json();
    console.log(similar["genres"]);
    setSimilar(similar);
  }

  return(
    <div>
        <h1>Movie Id</h1>{id}
    </div>
  )
}