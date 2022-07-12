import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');

  const [publishedDate, setPublished] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setMainContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Label>Title</Form.Label>
      <Form.Control
        {...register('title', { required: true, minLength: 4 })}
        type='text'
        placeholder='Enter title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && (
        <small className='d-block form-text text-danger mt-2'>
          This field is required, minimum 4 signs
        </small>
      )}
      <Form.Label>Author</Form.Label>
      <Form.Control
        {...register('author', { required: true, minLength: 4 })}
        type='text'
        placeholder='Enter author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {errors.author && (
        <small className='d-block form-text text-danger mt-2'>
          This field is required, minimum 4 signs
        </small>
      )}
      <Form.Label>Published</Form.Label>
      <DatePicker
        selected={publishedDate}
        onChange={(date) => setPublished(date)}
      />
      {dateError && (
        <small className='d-block form-text text-danger mt-2'>
          This field is required
        </small>
      )}
      <Form.Label>Short description</Form.Label>
      <Form.Control
        {...register('shortDescription', { required: true, minLength: 20 })}
        type='text'
        placeholder='Leave a comment here'
        as='textarea'
        rows={3}
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />
      {errors.shortDescription && (
        <small className='d-block form-text text-danger mt-2'>
          This field is required, minimum 20 signs
        </small>
      )}
      <Form.Label>Main content</Form.Label>
      <ReactQuill
        type='text'
        theme='snow'
        placeholder='Leave a comment here'
        className='my-editing-area'
        value={content}
        onChange={setMainContent}
      />
      {contentError && (
        <small className='d-block form-text text-danger mt-2'>
          This field is required, minimum 4 signs
        </small>
      )}
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
