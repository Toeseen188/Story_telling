import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const recentBooks = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    lastRead: "2 hours ago"
  },
  {
    id: 2,
    title: "Verity",
    author: "Colleen Hoover",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    lastRead: "Yesterday"
  }
];

const RecentlyViewed = () => {
  return (
    <section className="mb-5">
      <h2 className="fw-bold fs-4 mb-4">Recently Viewed</h2>
      <div className="row g-4">
        {recentBooks.map((book) => (
          <div key={book.id} className="col-md-6">
            <Link to={`/book/${book.id}`} className="text-decoration-none">
              <div className="d-flex bg-white rounded shadow-sm overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="flex-shrink-0"
                  style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                />
                <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h3 className="fs-6 fw-semibold mb-1 text-dark">{book.title}</h3>
                    <p className="text-muted small">{book.author}</p>
                  </div>
                  <div className="d-flex align-items-center text-muted small">
                    <Clock className="me-2" size={16} />
                    <span>{book.lastRead}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
