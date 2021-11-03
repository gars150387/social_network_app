import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="m-auto">
			<Container>
				<Row>
					<Form
						md={6}
						style={{
							width: "60%",
							height: "50%",
							margin: "auto",
							border: "solid black 1px",
							margin: "auto"
						}}
						className="m-4">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<div className="text-end">
							<Button variant="success" type="submit" className="mb-3">
								Submit
							</Button>
						</div>
						<Link to="/signUp">
							<Form.Text className="text-start" style={{ marginLeft: "10px" }}>
								If you do not have an account. please click this link to create one
							</Form.Text>
						</Link>
					</Form>
				</Row>
			</Container>
		</div>
	);
};
