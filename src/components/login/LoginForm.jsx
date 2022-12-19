import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div >
      <div className="HloginformParent">
        <div className="Hloginform">
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p>New here, <Link to="/sign">Click here</Link> to sign up</p>
            <p><Link to="/learnerHomepage">Click here for learner</Link></p>
            <p><Link to="/authorHomepage">Click here for author</Link></p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
