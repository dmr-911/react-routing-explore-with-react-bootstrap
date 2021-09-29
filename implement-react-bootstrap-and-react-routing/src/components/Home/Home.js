import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import News from '../../News/News';

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setNews(data));
    },[])
    return (
        <div>
            <Container fluid>
               <Row xs={1} md={1} className="g-2 my-4">
                    {
                    news.length === 0 ?
                        <Container className="d-flex justify-content-center">
                            <Spinner animation="grow" />
                        </Container>
                        :
                        news.map(ns => <News
                            key={ns.id}
                            news={ns}
                        ></News>)
                    }  
                </Row>
            </Container>
        </div>
    );
};

export default Home;