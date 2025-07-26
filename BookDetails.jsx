import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import books from '../data/books';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{book.title}</h2>
      <img
        src={book.image}
        alt={book.title}
        style={{ maxWidth: '300px', width: '100%', height: 'auto', marginBottom: '1rem' }}
      />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <button onClick={() => navigate(-1)} style={{
        marginTop: '1rem',
        backgroundColor: '#4F46E5',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
         Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;
