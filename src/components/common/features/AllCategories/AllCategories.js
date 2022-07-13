import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../../redux/categoriesRedux';
import clsx from 'clsx';

const AllCategories = () => {
  const categories = useSelector((state) => getAllCategories(state));

  return (
    <Container className='mt-3'>
      <Row>
        <Col
          align='left'
          xs={1}
          md={6}
          lg={8}
          className={clsx('justify-content-between')}
        >
          {categories.map((category) => (
            <Row key={category.id}>
              <Card key={category.id}>
                <Link key={category.id} to={'/category/' + category.name}>
                  <p>{category.name}</p>
                </Link>
              </Card>
            </Row>
          ))}
        </Col>
        <Col xs={1} md={3} lg={4}></Col>
      </Row>
    </Container>
  );
};

export default AllCategories;
