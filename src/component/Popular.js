import React,{useState,useEffect} from "react";
import Movies from './Movies';


export default function Popular() {
    const [popular,setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  },[]);

  const fetchPopular = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d3f533569e4685f6cd79f8c0a2e8c234")
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