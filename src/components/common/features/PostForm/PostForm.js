import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      <DatePicker
        selected={publishedDate}
        onChange={(date) => setPublished(date)}
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
      <ReactQuill
        type='text'
        theme='snow'
        placeholder='Leave a comment here'
        className='my-editing-area'
        onChange={setMainContent}
        value={content}
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
