import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";



const RandomUser=(props)=>{
    // console.log(props.newData)
   

   
    return (
      <div>
        <Card className="card" style={{ width: "25rem" }}>
          <Card.Title style={{ textAlign: "center" }}>
            <h1>
              {props.newData.name.first} {props.newData.name.last}
            </h1>
          </Card.Title>
          <Card.Body>
            <Card.Img variant="center" src={props.newData.picture.large} />
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h4>
                {props.newData.dob.date} age: {props.newData.dob.age}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>phone:{props.newData.phone}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Email:{props.newData.email}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
}

export default RandomUser;