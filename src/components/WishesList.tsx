import React from 'react';
import { Heart } from 'lucide-react';
import { Wish } from '../types';

interface WishesListProps {
  wishes: Wish[];
  onOpenWishModal: () => void;
  onLikeWish: (id: string) => void;
}

export const WishesList: React.FC<WishesListProps> = ({ wishes, onOpenWishModal, onLikeWish }) => {
  return (
    <section id="wishes" className="section-padding" style={{ padding: '70px 0', backgroundColor: '#fcfcfc' }}>
      <div className="container">
        <div className="wpo-section-title text-center mb-5">
          <span style={{ fontFamily: 'Sail, cursive', fontSize: '26px', color: '#C8A898', display: 'block' }}>
            Blessings &amp; Prayers
          </span>
          <h2 style={{ fontSize: '42px', fontWeight: 500, color: '#101010', marginTop: '5px' }}>
            Guest Wishes
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {wishes.map((w) => (
            <div key={w.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 p-4 border-0 shadow-sm"
                style={{ backgroundColor: '#ffffff', borderRadius: '15px', border: '1px solid #f0f0f0' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5 className="mb-0 text-dark" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
                      {w.name}
                    </h5>
                    <small className="text-muted">{w.date}</small>
                  </div>
                  <button
                    onClick={() => onLikeWish(w.id)}
                    className="btn btn-sm d-flex align-items-center gap-1 border-0"
                    style={{ color: '#ea6e53', backgroundColor: '#fff2ee', borderRadius: '20px' }}
                    title="Send love"
                  >
                    <Heart size={14} fill="#ea6e53" />
                    <span style={{ fontSize: '12px', fontWeight: 600 }}>{w.likes}</span>
                  </button>
                </div>
                <p className="card-text text-muted" style={{ fontStyle: 'italic', lineHeight: '1.6', fontSize: '15px' }}>
                  &ldquo;{w.message}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            onClick={onOpenWishModal}
            className="btn text-white px-5 py-3"
            style={{
              backgroundColor: '#657150',
              borderRadius: '55px',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            Leave a Blessing
          </button>
        </div>
      </div>
    </section>
  );
};
