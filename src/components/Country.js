import React from "react";
import GetAPI from "../services/Data";
import { Card, Image, Col, Button, Row, ButtonGroup } from "react-bootstrap";

function Country() {
  let countryList = GetAPI();
  return (
    <Row xs={1} md={4} className="g-4">
      {countryList.map((country, index) => {
        return (
          <Col >
            <Card key={index}>
              <Image style={{height: '18rem'}} variant="center" src={country.flag} />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                 {country.capital && <Card.Text>Capital: {country.capital}</Card.Text>}
                <ButtonGroup size="sm">
                    {
                        country.languages.map(
                            (lang) => {
                                return (
                                    <Button>
                                        {lang.name}
                                    </Button>
                                )
                            }
                        )
                    }
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Country;
