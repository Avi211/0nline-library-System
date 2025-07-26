import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', author: '', description: '', rating: '', image: '', category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.image)
      return alert('Fill all required fields');

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate('/browse');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="rating" placeholder="Rating (1-5)" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}
