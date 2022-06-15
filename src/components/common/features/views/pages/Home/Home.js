import { Col, Container, Row, Button } from 'react-bootstrap';
import AllPosts from '../../../AllPosts/AllPosts';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Home = () => {
  return (
    <Container>
      <Row className={clsx('my-4', 'align-items-center')}>
        <Col xs={9} md={10}>
          <h2>All posts</h2>
        </Col>
        <Col xs={3} md={2} align='center'>
          <Link to={'/post/add'}>
            <Button variant='outline-info'>Add post</Button>
          </Link>
        </Col>
      </Row>

      <AllPosts />
    </Container>
  );
};

export default Home;
