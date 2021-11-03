import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<Container>
			<Row md={10}>
				<Col>
					<input className="m-auto" type="text" placeholder="First Name" />
				</Col>
			</Row>
			<Row>
				<Col>
					<input className="m-auto" type="text" placeholder="Last Name" />
				</Col>
			</Row>
			<Row>
				<Col>
					<input className="m-auto" type="email" placeholder="Email" />
				</Col>
			</Row>
			<Row>
				<Col>
					<input className="m-auto" type="password" placeholder="Password" />
				</Col>
			</Row>
			<Row>
				<Col>
					<input className="m-auto" type="confirmationPassword" placeholder="Confirmation Password" />
				</Col>
			</Row>
			<Link to="/">
				<Form.Text className="text-start" style={{ marginLeft: "10px" }}>
					If you do have an account. please click this link to sign in.
				</Form.Text>
			</Link>
		</Container>
	);
};
