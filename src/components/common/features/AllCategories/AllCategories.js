import { Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../../redux/categoriesRedux';
import clsx from 'clsx';

const AllCategories = () => {
  const categories = useSelector((state) => getAllCategories(state));

  return (
    <Container className='p-0'>
      <section className={clsx('justify-content-between')}>
        {categories.map((category) => (
          <Row key={category.id}>
            <Card key={category.id}>
              <Link key={category.id} to={'/category/' + category.name}>
                <p>{category.name}</p>
              </Link>
            </Card>
          </Row>
        ))}
      </section>
    </Container>
  );
};

export default AllCategories;
