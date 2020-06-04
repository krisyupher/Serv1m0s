import React from "react";
import { Row, Col, Card, CardBody, Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import avatar1 from "../assets/images/users/avatar-1.jpg"
const InforCliente = () => {
  return (
    <Col lg="12">
      <Card>
        <CardBody>
          <Row>
            <Col lg="4">
              <Media>
                <div className="mr-3">
                  <img src={avatar1} alt="" className="avatar-md rounded-circle img-thumbnail" />
                </div>
                <Media className="align-self-center" body>
                  <div className="text-muted">
                    <h5 className="mb-1"> Grupo Exito</h5>
                    <p className="mb-0">Nit: 3435465768-9</p>
                    <p className="mb-0"> Cristian Florez</p>
                    <p className="mb-2">3201823547</p>
                  </div>
                </Media>
              </Media>
            </Col>

            <Col lg="4" className="align-self-center">
              <div className="text-lg-center mt-4 mt-lg-0">
                <Row>
                  <Col xs="4">
                    <div>
                      <p className="text-muted text-truncate mb-2">Calificación</p>
                      <h5 className="mb-0">AA</h5>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div>
                      <p className="text-muted text-truncate mb-2">Sector</p>
                      <p className="mb-0"> Supermercado</p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div>
                      <p className="text-muted text-truncate mb-2">Representante</p>
                      <h5 className="mb-0">Armando Brito</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg="4" className="d-none d-lg-block">
              <div className="clearfix mt-4 mt-lg-0 radius50">
                <Dropdown isOpen=/*{this.state.settings_Menu} toggle={this.toggleSettings}*/"" className="float-right">
                  <DropdownToggle tag="button" className="btn btn-primary">
                    <i className="bx bxs-cog align-middle mr-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}
export default InforCliente;