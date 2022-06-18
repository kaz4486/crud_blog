import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [mainContent, setMainContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, published, shortDescription, mainContent })
    );
    setTitle('');
    setAuthor('');
    setPublished('');
    setShortDescription('');
    setMainContent('');
    navigate('/');
  };

  return (
    <Form>
      <Form.Label>Title</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Form.Label>Author</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Form.Label>Published</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter published date'
        value={published}
        onChange={(e) => setPublished(e.target.value)}
      />
      <Form.Label>Short description</Form.Label>
      <Form.Control
        type='text'
        placeholder='Leave a comment here'
        as='textarea'
        rows={3}
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />
      <Form.Label>Main content</Form.Label>
      <Form.Control
        type='text'
        placeholder='Leave a comment here'
        as='textarea'
        rows={10}
        value={mainContent}
        onChange={(e) => setMainContent(e.target.value)}
      />
      <Button variant='primary' onClick={handleSubmit}>
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;
