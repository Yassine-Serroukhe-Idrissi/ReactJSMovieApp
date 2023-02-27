import React,{useState,useEffect} from "react";
import { api_key } from "./api_key";
import Card from 'react-bootstrap/Card';
import {Row,Col } from "react-bootstrap";
import { Link} from "react-router-dom";


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
    <Row xs={1} md={4} className="g-4">
      {popular.map((movie)=>{
        return(
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w500/"+ movie.backdrop_path} />
              <Card.Body>
                <Link to={`../movie/details/${movie.id}`}> 
                  <Card.Title>{movie.title}</Card.Title>
                </Link>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
        
  )

}