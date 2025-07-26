import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>📚 Online Library</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse Books</Link></li>
        <li><Link to="/add">Add Book</Link></li>
      </ul>
    </nav>
  );
}
