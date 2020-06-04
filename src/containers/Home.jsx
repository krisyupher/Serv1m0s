import React from 'react';
import '../styles/containers/Home.scss';

import { Container } from "reactstrap";
import { Row, Col, Card, CardBody, CardImg, Media, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, CardTitle, CardSubtitle, CardHeader } from "reactstrap";
import { Table, Input, Label } from "reactstrap";
//Import Images
import avatar1 from "../assets/images/users/avatar-1.jpg";

//Import Breadcrumb
//import Breadcrumbs from '../../components/Common/Breadcrumb';


import { Link } from "react-router-dom";

import classnames from "classnames";
import img1 from "../assets/images/small/img-1.jpg";
import tiposdebanco from "../assets/images/D25AA81989569645.png";
import obligacionesFinancieras from "../assets/images/D25AA81989569645.png";
import tarjetacrédito from "../assets/images/D25AA81989569645.png";
import Terceros from "../assets/images/D25AA81989569645.png";
import cifin from "../assets/images/D25AA81989569645.png";
import estadosFinancieros from "../assets/images/D25AA81989569645.png";
// import camaraDeComercioBogota from "../assets/images/camaraDeComercioBogota.jpg";
// import cifin from "../assets/images/cifin.jpg";
// import dianRUT from "../assets/images/dianRUT.jpg";
import camaraDeComercioBogota from "../assets/images/D25AA81989569645.png";
// import dianRUT from "../assets/images/D25AA81989569645.png";

//Simple bar
import SimpleBar from "simplebar-react";
import InforCliente from '../components/InforCliente';
import ContentInTap from '../components/ContentInTap';

const Home = () => {
  return (
    <React.Fragment>
				<div className="page-content">
					<Container fluid>

						{/* Render Breadcrumbs */}
						{/*<Breadcrumbs title="Inicio" breadcrumbItem="Cliente" />*/}
						<Row className="mb-3">
							<Col lg="12" sm="12">
								<Form className="mt-4 mt-sm-0 float-ms-right form-inline">
									<div className="search-box mr-2">
										<div className="position-relative col-md-10" >

											<Input type="text" className="form-control border-0 inputLarge" placeholder="Buscar..." />
											<i className="bx bx-search-alt search-icon"></i>
										</div>
									</div>
									<button class="btn btn-primary waves-effect waves-light btn btn-primary radius50">
										<i className="bx bx-search"></i>
									</button>
									<button class="btn btn-secondary waves-effect btn btn-secondary radius50 ml-2">
										<i className="bx bx-user-plus"></i>
									</button>
								</Form>
							</Col>
						</Row>
						<Row>
							<InforCliente/>
						</Row>
						<Row>
							<Col lg={12}>
								<Card>
									<CardBody>
										{/* <CardTitle>Justify Tabs</CardTitle>
										<CardSubtitle className="mb-3">
											Use the tab JavaScript plugin—include it individually or through the compiled{" "} <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.
                    					</CardSubtitle> */}

										<Nav pills className="navtab-bg nav-justified">
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: ""/*this.state.activeTab1 === "1"*/
													})}
													onClick={() => {
														this.toggle1("1");
													}}
												>
													Settings
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "2"*/""
													})}
													onClick={() => {
														this.toggle1("2");
													}}
												>
													Referencias
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "3"*/""
													})}
													onClick={() => {
														this.toggle1("3");
													}}
												>
													Settings
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "4"*/""
													})}
													onClick={() => {
														this.toggle1("4");
													}}
												>
													Empresarial
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "5"*/""
													})}
													onClick={() => {
														this.toggle1("5");
													}}
												>
													Home
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "6"*/""
													})}
													onClick={() => {
														this.toggle1("6");
													}}
												>
													Profile
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "7"*/""
													})}
													onClick={() => {
														this.toggle1("7");
													}}
												>
													Messages
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: /*this.state.activeTab1 === "8"*/""
													})}
													onClick={() => {
														this.toggle1("8");
													}}
												>
													Settings
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab=/*{this.state.activeTab1}*/"">
											<TabPane tabId="1" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															<Card>
																<CardBody>
																	<CardTitle className="mb-4">Personal Information</CardTitle>

																	<p className="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
																	<div className="table-responsive">
																		<Table className="table-nowrap mb-0">
																			<tbody>
																				<tr>
																					<th scope="row">Full Name :</th>
																					<td>Cynthia Price</td>
																				</tr>
																				<tr>
																					<th scope="row">Mobile :</th>
																					<td>(123) 123 1234</td>
																				</tr>
																				<tr>
																					<th scope="row">E-mail :</th>
																					<td>cynthiaskote@gmail.com</td>
																				</tr>
																				<tr>
																					<th scope="row">Location :</th>
																					<td>California, United States</td>
																				</tr>
																			</tbody>
																		</Table>
																	</div>
																</CardBody>
															</Card>
														</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="2" className="p-3">
												<Row>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tiposdebanco} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Bancarias</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={obligacionesFinancieras} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Obligaciones financieras</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tarjetacrédito} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Tarjeta credito</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={Terceros} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Terceros</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
																	up the bulk of the card's content.
																	</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="3" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Raw denim you probably haven't heard of them jean
															shorts Austin. Nesciunt tofu stumptown aliqua, retro
															synth master cleanse. Mustache cliche tempor,
															williamsburg carles vegan helvetica. Reprehenderit
															butcher retro keffiyeh dreamcatcher synth. Cosby
															sweater eu banh mi, qui irure terry richardson ex
															squid. Aliquip placeat salvia cillum iphone. Seitan
															aliquip quis cardigan american apparel, butcher
															voluptate nisi qui.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="4" className="p-3">
												<Row>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={cifin} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">CIFIN</CardTitle>
																	<CardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                  </CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={estadosFinancieros} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Estados Financieros</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={camaraDeComercioBogota} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Cámara de comercio</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													{/* <Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={dianRUT} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Certificado de existencia y representacion legal</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={dianRUT} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">RUT</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col> */}
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tarjetacrédito} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Declaracion de renta</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tarjetacrédito} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Declaracion de IVA</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tarjetacrédito} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Extracto Bancario</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
													<Col sm="4">
														<Col mg={6} xl={12}>
															<Card>
																<CardImg top className="img-fluid" src={tarjetacrédito} alt="Skote" />
																<CardBody>
																	<CardTitle className="mt-0">Fotocopia de la CC</CardTitle>
																	<CardText>Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</CardText>
																	<Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
																</CardBody>
															</Card>
														</Col>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="5" className="p-3">
												<Row>
                          <ContentInTap/>
												</Row>
											</TabPane>
											<TabPane tabId="6" className="p-3">
												<Row>
                          <ContentInTap/>
												</Row>
											</TabPane>
											<TabPane tabId="7" className="p-3">
												<Row>
                          <ContentInTap/>
												</Row>
											</TabPane>
											<TabPane tabId="8" className="p-3">
												<Row>
                          <ContentInTap/> 
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
							</Col>
						</Row>

					</Container>
				</div>
			</React.Fragment >
  );
};
export default Home;