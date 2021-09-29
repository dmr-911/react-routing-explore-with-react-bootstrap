import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const { title, body } = props.news;
    return (
      <Col>
        <Card border="info">
          <Card.Body>
            <Card.Title>Title : {title}</Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default News;