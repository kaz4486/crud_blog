import { Container, Row, Col } from 'react-bootstrap';
import AllCategories from '../../../AllCategories/AllCategories';

const Categories = () => {
  return (
    <Container>
      <Col align='left' xs={1} md={6} lg={8} className='m-auto '>
        <Row className='pt-4 pb-2'>
          <h2 align='left'>All categories</h2>
        </Row>
        <AllCategories />
      </Col>
    </Container>
  );
};

export default Categories;
