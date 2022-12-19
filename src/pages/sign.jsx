import React from "react";
import { Form, Button, Tabs, Tab} from "react-bootstrap";
import { Link } from "react-router-dom";
function Sign() {
  return (
    <div>
      <div className="HsigninformParent">
        <div className="Hsigninform">
          <Tabs
            defaultActiveKey="LearnerSignin"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="LearnerSignin" title="Learner Sign in">
              <Form className="p-5">
                <Form.Group className="mb-3" controlId="formBasicFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
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
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="AuthorSignin" title="Author Sign in">
              <Form className="p-5">
                <Form.Group className="mb-3" controlId="formBasicFName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
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
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Form>
              
            </Tab>
          </Tabs>
          <p>Already a user, <Link to="/login">Click here</Link> to login</p>
        </div>
      </div>
    </div>
  );
}

export default Sign;
