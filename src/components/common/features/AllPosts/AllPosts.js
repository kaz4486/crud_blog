import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './AllPosts.module.scss';
import { dateToStr } from '../../../../utils/dateToStr';

const AllPosts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <Container className='p-0'>
      <section className={clsx('justify-content-between')}>
        <Row>
          {posts.map((post) => (
            <Col key={post.author} xs={12} sm={6} lg={4}>
              <Card
                key={post.title}
                border='secondary'
                className={clsx('p-3', 'mb-1')}
              >
                <h5>{post.title}</h5>
                <h6>
                  <span className={styles.bold}>Author:</span> {post.author}
                </h6>
                <h6>
                  <span className={styles.bold}>Published:</span>{' '}
                  {dateToStr(post.publishedDate)}
                </h6>
                <h6>
                  <span className={styles.bold}>Category: </span>
                  {post.category}
                </h6>
                <p>{post.shortDescription}</p>
                <Link key={post.id} to={'/post/' + post.id}>
                  <Button variant='primary'>Read more</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default AllPosts;
