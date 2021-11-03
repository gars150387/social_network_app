import React from "react";
import { Container, Col } from "react-bootstrap";

export const SignUp = () => {
	return (
		<Container>
			<Col>
				<input className="m-auto" type="text" placeholder="First Name" />
			</Col>
			<Col>
				<input className="m-auto" type="text" placeholder="Last Name" />
			</Col>
			<Col>
				<input className="m-auto" type="email" placeholder="Email" />
			</Col>
			<Col>
				<input className="m-auto" type="password" placeholder="Password" />
			</Col>
			<Col>
				<input className="m-auto" type="confirmationPassword" placeholder="Confirmation Password" />
			</Col>
		</Container>
	);
};
