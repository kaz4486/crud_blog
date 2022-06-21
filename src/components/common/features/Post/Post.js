import { useParams, Navigate } from 'react-router-dom';
import { getPostById } from '../../../../redux/postsRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { removePost } from '../../../../redux/postsRedux';

const Post = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleClickRemove = () => {
    handleClose();
    dispatch(removePost(postData.id));
  };

  if (!postData) return <Navigate to='/' />;
  else
    return (
      <Container>
        <Row className='mt-5'>
          <Col md={2}></Col>
          <Col md={4}>
            <article className='justify-content-center'>
              <h2 className='mb-4'>{postData.title}</h2>
              <p className='mb-0'>
                <strong>Author:</strong> {postData.author}
              </p>
              <p>
                <strong>Published:</strong> {postData.publishedDate}
              </p>
              <p>{postData.shortDescription}</p>
            </article>
          </Col>

          <Col md={4} align='right' className='mx-2'>
            <Link to={'/post/edit/' + id}>
              <Button variant='outline-info' className='mx-1'>
                Edit
              </Button>
            </Link>
            <Button
              variant='outline-danger'
              className='mx-1'
              onClick={handleShow}
            >
              Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                This operation will completely remove this post from the app.
                Are you sure you want to do that?
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant='danger' onClick={handleClickRemove}>
                  Remove
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
};

export default Post;
