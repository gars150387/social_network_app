import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<Container style={{ width: "400px", height: "600px", border: "solid black 1px", marginTop: "20px" }}>
			<Row md={10}>
				<Col className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15" type="text" placeholder="First Name" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15" type="text" placeholder="Last Name" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15" type="email" placeholder="Email" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15" type="password" placeholder="Password" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input
						className="m-auto mt-3 mb-3  w-100 h-15"
						type="confirmationPassword"
						placeholder="Confirmation Password"
					/>
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
