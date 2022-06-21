import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');

  const [publishedDate, setPublished] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setMainContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        type='string'
        placeholder='Enter published date'
        value={publishedDate}
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
        value={content}
        onChange={(e) => setMainContent(e.target.value)}
      />
      <Button variant='primary' type='submit' className='mt-2'>
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default PostForm;
