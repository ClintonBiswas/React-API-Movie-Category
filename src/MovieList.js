import React from "react";
import { Card } from "react-bootstrap";

const MovieList = ({ item: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="container">
      <div className="row" style={{ float: "left" }}>
        <div className="col-lg-3 mx-2 mb-4">
          <Card style={{ width: "18rem", height: "auto" }} className="">
            <Card.Img
              variant="top"
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
              }
              alt={Title}
            />
            <Card.Body>
              <span>{Type}</span>
              <Card.Title>{Title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
