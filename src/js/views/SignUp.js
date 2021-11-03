import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<Container
			style={{
				width: "400px",
				height: "400px",
				border: "solid black 1px",
				marginTop: "20px",
				borderRadius: "rounded"
			}}>
			<Row md={10}>
				<Col className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15 rounded" type="text" placeholder="First Name" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15 rounded" type="text" placeholder="Last Name" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15 rounded" type="email" placeholder="Email" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input className="m-auto mt-3 mb-3  w-100 h-15 rounded" type="password" placeholder="Password" />
				</Col>
			</Row>
			<Row>
				<Col xs className="w-100 h-15">
					<input
						className="m-auto mt-3 mb-3  w-100 h-15 rounded"
						type="confirmationPassword"
						placeholder="Confirmation Password"
					/>
				</Col>
			</Row>
			<div className="text-end">
				<Button variant="success" type="submit">
					Submit
				</Button>
			</div>
			<br />
			<Link to="/">
				<Form.Text className="text-start" style={{ marginLeft: "10px" }}>
					If you do have an account. please click this link to sign in.
				</Form.Text>
			</Link>
		</Container>
	);
};
