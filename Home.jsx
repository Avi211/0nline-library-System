import { Link } from 'react-router-dom';
import books from '../data/books';

export default function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy'];
  const popular = books.slice(0, 8);

  return (
    <div className="home">
      <h2>Welcome to the Online Library 📖</h2>
      <h3>Categories</h3>
      <ul>{categories.map(c => <li key={c}><Link to={`/books/${c}`}>{c}</Link></li>)}</ul>
      <h3>Popular Books</h3>
      <div className="grid">{popular.map(book => (
        <div className="card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h4>{book.title}</h4>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}</div>
    </div>
  );
}