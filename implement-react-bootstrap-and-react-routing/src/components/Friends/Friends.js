import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])
    return (
      <div>
        <Container fluid>
          <Row xs={1} md={3} className="g-2 my-4">
            {friends.length === 0 ? (
              <Container className="d-flex justify-content-center">
                <Spinner animation="grow" />
              </Container>
            ) : (
              friends.map((friend) => (
                <Friend key={friend.id} friend={friend}></Friend>
              ))
            )}
          </Row>
        </Container>
      </div>
    );
};

export default Friends;