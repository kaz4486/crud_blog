import { Container, Col, Card, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../../redux/postsRedux';
import clsx from 'clsx';
import { dateToStr } from '../../../../utils/dateToStr';

const Category = () => {
  const { name } = useParams();

  const posts = useSelector((state) => getPostByCategory(state, name));

  if (posts.length === 0)
    return (
      <Container>
        <article>
          <h2 className='font-weight-bold'> Category: {name}</h2>
          <p> No posts in this category...</p>
        </article>
      </Container>
    );
  else
    return (
      <Container>
        <Row className='my-2'>
          <h2 className='font-weight-bold'>Category: {name}</h2>
        </Row>
        <Row>
          {posts.map((post) => (
            <Col key={post.author} xs={12} sm={6} lg={4}>
              <Card
                key={post.id}
                border='secondary'
                className={clsx('p-3', 'mb-1')}
              >
                <h5>{post.title}</h5>
                <h6>
                  <span className='font-weight-bold'>Author:</span>{' '}
                  {post.author}
                </h6>
                <h6>
                  <span className='font-weight-bold'>Published:</span>{' '}
                  {dateToStr(post.publishedDate)}
                </h6>
                <h6>
                  <span className='font-weight-bold'>Category: </span>
                  {post.category}
                </h6>
                <p>{post.shortDescription}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Category;
