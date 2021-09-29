import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { useSpring, animated } from "react-spring";
import { useHistory, useParams } from 'react-router';

const FreindDetails = () => {
    const { friendId } = useParams();
    const [details, setDetails] = useState({});
    const { name, email, phone, website, address } = details;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

          const styles = useSpring({
            loop: true,
            to: [
              { opacity: 1, color: "#ffaaee" },
              { opacity: 0, color: "rgb(14,26,19)" },
            ],
            from: { opacity: 0, color: "red" },
          });
          

    const history = useHistory();
    const onHandleFriends = () => {
        history.push('/friends');
    }
    return (
        <div>
            <animated.div style={styles}><h2>Friend Details</h2></animated.div>
            {
                details.length === 0 ?
                <Container className="d-flex justify-content-center">
                        <Spinner animation="grow" />
                </Container>
                    :
                <Container className="d-flex justify-content-center align-items-center my-4">
                <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>
                    <h5>{name}</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Lives in {address?.city}</Card.Title>
                    <Card.Text>
                        Email : {email}
                    </Card.Text>
                    <Card.Text>
                        Phone : {phone}
                    </Card.Text>
                    <Card.Text>
                        Website : {website}
                    </Card.Text>
                    <Button onClick={onHandleFriends} variant="primary" size="md" active>
                    Go to Friends
                    </Button>{" "}
                </Card.Body>
                </Card>
            </Container>
            }
        </div>
    );
};

export default FreindDetails;