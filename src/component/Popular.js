import React,{useState,useEffect} from "react";
import Movies from './Movies';
import { api_key } from "./api_key";


export default function Popular() {
    const [popular,setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  },[]);

  const fetchPopular = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key="+api_key)
    const movies = await data.json();
    setPopular(movies.results);
  }

  return(
    <div>
        {popular.map((movie)=>{
        return <Movies key={movie.id} movie={movie}/>
      })}
    </div>
  )

}