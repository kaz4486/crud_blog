import { Container, Row, Col } from 'react-bootstrap';

import AllCategories from '../../../AllCategories/AllCategories';

const Categories = () => {
  return (
    <Container>
      <Col>
        <Row>
          <h2>All categories</h2>
        </Row>
        <AllCategories />
      </Col>
    </Container>
  );
};

export default Categories;
