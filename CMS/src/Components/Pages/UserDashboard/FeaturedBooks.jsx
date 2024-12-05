import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const featuredBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8
  },
  {
    id: 2,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.7
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9
  }
];

const FeaturedBooks = () => {
  return (
    <section className="mb-5">
      <h2 className="text-center fw-bold mb-4">Featured Books</h2>
      <div className="row g-4">
        {featuredBooks.map((book) => (
          <div key={book.id} className="col-12 col-md-4">
            <Link to={`/book/${book.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm transition-transform">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">{book.author}</p>
                  <div className="d-flex align-items-center">
                    <Star className="me-1 text-warning" style={{ width: "16px", height: "16px" }} />
                    <span>{book.rating}</span>
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

export default FeaturedBooks;
