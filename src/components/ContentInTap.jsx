
import React from "react";
import { Col, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
const ContentInTap = (props) => {
  const { tiposdebanco } = props;
  return (
    <Col sm="4">
      <Col mg={6} xl={12}>
        <Card>
          <CardImg top className="img-fluid" src={tiposdebanco} alt="Skote" />
          <CardBody>
            <CardTitle className="mt-0">Bancarias</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make
              up the bulk of the card's content.
            </CardText>
            <Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
          </CardBody>
        </Card>
      </Col>
    </Col>
  )
}
export default ContentInTap;