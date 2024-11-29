import React,{useState,useEffect} from "react";
import { ListGroup, Row, Col, Container} from "react-bootstrap";
import GetAPI from "../services/Data";

function Statistics() {

    const [languages, setLanguages] = useState([]);
    const languageList = GetAPI();
    const totalList = [];

    useEffect(() => {
        languageList.map(lang => lang.languages.forEach(element => {
            let findIndex = totalList.findIndex(
                (lang) => lang.iso639_1 === element.iso639_1
            );
            if(findIndex === -1){
                totalList.push({...element,count: 1});
            }else{
                totalList[findIndex].count += 1;
            }
        }))
        totalList.sort((a,b) => a.count < b.count ? 1 : -1);
        setLanguages(totalList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (
    <>
      <Container>
          <Row>
              <Col md="4">
              <ListGroup>
                    {
                        languages.map((lang, index) => index < 10 && (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                {lang.name}
                                <span class="badge bg-secondary">{lang.count}</span>
                            </li>
                            ) 
                        )
                    }
                </ListGroup>
              </Col>
          </Row>
      </Container>
    </>
  );
}
export default Statistics;
