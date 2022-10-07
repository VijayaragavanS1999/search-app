import Dropdown from "react-bootstrap/Dropdown";

import Stack from "react-bootstrap/Stack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
      <div>
        <Stack
          direction="horizontal"
          gap={1}
          style={{ width: "90%", margin: "auto", marginTop: "20px" }}
        >
          <h4>Our Deals</h4>
          <InputGroup style={{ width: "400px" }} className="ms-auto">
            <Form.Control
              placeholder="Search with company name"
              className="bg-light border ms-auto"
              value={filter}
              aria-label="Recipient's username with two button addons"
              onChange={searchName}
            />
            <Button variant="outline-secondary">Search</Button>

            <Dropdown style={{ marginLeft: "20px" }}>
              <Dropdown.Toggle>
                Filter
                <FilterAltIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div style={{ width: "600px" }}>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    All
                  </Button>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    Break Fast
                  </Button>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    Lunch
                  </Button>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    Dinner
                  </Button>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    Dessert
                  </Button>
                  <Button style={{ marginRight: "20px" }} variant="danger">
                    Fast Food
                  </Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginTop: "50px", marginLeft: "70px" }}>
          Discover the best food & drinks in
        </h4>
      </div>
      <img
        style={{ width: "90%", marginLeft: "60px", marginTop: "20PX" }}
        src="https://www.lastminutedeals.co.in/images/banner/banner1.png"
        alt="banner"
      />

      <Container className="gridContainer">
        <Row className="row">
          <Col className="col">
            {dataSearch.map((item) => {
              return (
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={item.img} />

                  {new Date().toLocaleTimeString()}
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
      <Container className="gridContainer">
        <Row className="row">
          <Col className="col">
            {data.Extra.map((item) => {
              return (
                <Card style={{ width: "15rem" }}>
                  <Card.Body>
                    <img src={item.url} style={{ color: "white" }} alt="img" />
                    <Card.Title>{item.name}</Card.Title>

                    <Card.Text>{item.description}</Card.Text>
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
