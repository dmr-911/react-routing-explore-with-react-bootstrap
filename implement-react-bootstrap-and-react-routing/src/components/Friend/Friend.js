import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const onClickDetails = () => {
        history.push(`/friend/${id}`)
    }
    return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Email : {email}</Card.Text>
            <Button onClick={onClickDetails} variant="primary" size="md" active>
              Details
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Friend;