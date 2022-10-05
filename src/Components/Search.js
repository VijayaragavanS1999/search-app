import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../App.css";
import data from "./data";

const SearchBar = () => {
  const [filter, setFilter] = useState("");
  const searchName = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div>
      <InputGroup className="search">
        <Form.Control
          placeholder="Search with company name"
          value={filter}
          aria-label="Recipient's username with two button addons"
          onChange={searchName}
        />
        <Button variant="outline-secondary">Search</Button>
      </InputGroup>
      <Container className="gridContainer">
        <Row className="row">
          <Col className="col">
            {dataSearch.map((item) => {
              return (
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.primaryText}</Card.Text>
                    <Card.Text style={{ color: "red" }}>
                      {item.headLine}
                    </Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">
                      <a href={item.url} style={{ color: "white" }}>
                        {item.input}
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
