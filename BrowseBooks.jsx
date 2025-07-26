import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState('');
  const books = useSelector(state => state.books.list);

  const filtered = books.filter(b =>
    (!category || b.category === category) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) ||
     b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse">
      <h2>{category ? category : 'All'} Books</h2>
      <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <div className="grid">
        {filtered.map(book => (
          <div className="card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}