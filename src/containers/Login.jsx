import React, { Component } from 'react';

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
//import { loginUser, apiError } from '../../store/actions';

//Styles
import "../styles/containers/Login.scss";

// import images
import profile from "../assets/images/profile-img.png";
import logo from "../assets/images/logo.svg";

const Login = () => {
  return (
    <React.Fragment>
      {/* <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="bx bx-home h2"></i></Link>
                </div> */}
      <div className="account-pages my-0 pt-sm-0">
        <Container className="loginContainer">
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-white">Bienvenido a Servimos!</h5>
                        <p className="text-white">  Ingresa para continuar.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-2">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={logo} alt="" className="rounded-circle" height="34" />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">

                    <AvForm className="form-horizontal" onValidSubmit="asdasdasd">
                      <div className="form-group">
                        <AvField name="email" label="Correo electrónico" value="admin@themesbrand.com" className="form-control" placeholder="Correo electrónico" type="email" required />
                      </div>

                      <div className="form-group">
                        <AvField name="password" label="Contraseña" value="123456" type="password" required placeholder="Contraseña" />
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                        <label className="custom-control-label" htmlFor="customControlInline">Recordar contraseña</label>
                      </div>

                      <div className="mt-3">
                        <Link 
                          to="/" 
                          className="btn btn-primary btn-block waves-effect waves-light" 
                          type="submit">
                          Ingresar
                        </Link>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Olvidé la contraseña</Link>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p className="text-white">No te encuentras registrado  <Link to="register" className="font-weight-medium text-primary"> Registrate </Link> </p>
                <p className="text-white">© {new Date().getFullYear()} Servimos.  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
export default Login;

