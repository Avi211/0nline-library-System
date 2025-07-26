import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}