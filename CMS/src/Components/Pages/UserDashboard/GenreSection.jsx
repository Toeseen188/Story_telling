import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Heart, Sword, Rocket, 
  Glasses, Coffee, Ghost, Drama 
} from 'lucide-react';

const genres = [
  { id: 1, name: 'Romance', icon: Heart, color: 'bg-light text-danger' },
  { id: 2, name: 'Fantasy', icon: Sword, color: 'bg-light text-primary' },
  { id: 3, name: 'Sci-Fi', icon: Rocket, color: 'bg-light text-info' },
  { id: 4, name: 'Mystery', icon: Glasses, color: 'bg-light text-warning' },
  { id: 5, name: 'Contemporary', icon: Coffee, color: 'bg-light text-success' },
  { id: 6, name: 'Horror', icon: Ghost, color: 'bg-light text-danger' },
  { id: 7, name: 'Drama', icon: Drama, color: 'bg-light text-secondary' },
  { id: 8, name: 'Classics', icon: BookOpen, color: 'bg-light text-dark' },
];

const GenreSection = () => {
  return (
    <section className="mb-5">
      <h2 className="text-center text-md-start fw-bold mb-4">Browse by Genre</h2>
      <div className="row g-4">
        {genres.map((genre) => {
          const Icon = genre.icon;
          return (
            <div key={genre.id} className="col-6 col-sm-4 col-md-3">
              <Link
                to={`/genre/${genre.name.toLowerCase()}`}
                className="text-decoration-none"
                aria-label={`Explore ${genre.name} genre`}
              >
                <div 
                  className={`card ${genre.color} p-3 rounded text-center shadow-sm transition-transform`}
                  style={{ cursor: 'pointer' }}
                >
                  <Icon className="mb-3" size={32} />
                  <span className="fw-medium">{genre.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GenreSection;
