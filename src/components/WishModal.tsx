import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { Wish } from '../types';

interface WishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWish: (wish: Wish) => void;
}

export const WishModal: React.FC<WishModalProps> = ({ isOpen, onClose, onAddWish }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setErrorMessage('Please enter both your name and message.');
      setShowError(true);
      return;
    }

    const newWish: Wish = {
      id: `wish_${Date.now()}`,
      name: name.trim(),
      relation: email.trim() ? `Email: ${email.trim()}` : 'Well-wisher',
      message: message.trim(),
      date: 'Just now',
      likes: 1,
    };

    onAddWish(newWish);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#657150', '#C8A898', '#4280bd', '#f4ede6'],
      });
    } catch {
      // graceful fallback if canvas-confetti fails
    }

    setShowSuccess(true);
    setShowError(false);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="modal d-block"
      id="whishModal"
      tabIndex={-1}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 10050,
      }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px' }}>
        <div className="modal-content shadow-lg border-0 rounded-3 overflow-hidden">
          {/* Modal Header in #242620 */}
          <div className="modal-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#242620', padding: '16px 24px' }}>
            <h1 className="modal-title fs-5 m-0" id="whishModalLabel" style={{ color: 'white', fontFamily: "'Jost', sans-serif", fontSize: '20px' }}>
              Send Your Wish
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
              style={{ filter: 'invert(1)', opacity: 0.8 }}
            ></button>
          </div>

          {/* Success Alert */}
          {showSuccess && (
            <div className="alert alert-success m-3" role="alert" style={{ fontSize: '14px' }}>
              Your wish has been shared successfully! Thank you for blessing Akhil &amp; Sneha.
            </div>
          )}

          {/* Error Alert */}
          {showError && (
            <div className="alert alert-danger m-3" role="alert" style={{ fontSize: '14px' }}>
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form id="whishForm" onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="mb-3">
                <label htmlFor="name" className="col-form-label fw-medium text-dark">
                  Name <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderRadius: '6px', padding: '10px 14px' }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="col-form-label fw-medium text-dark">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderRadius: '6px', padding: '10px 14px' }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="message" className="col-form-label fw-medium text-dark">
                  Message <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your warm wishes and prayers for Akhil &amp; Sneha"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ borderRadius: '6px', padding: '10px 14px' }}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer p-3 bg-light border-top">
              <button
                type="button"
                className="btn btn-secondary px-4"
                onClick={onClose}
                style={{ borderRadius: '25px', fontSize: '14px' }}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn text-white px-4 d-inline-flex align-items-center gap-2 cursor-pointer"
                id="whishBtn"
                style={{
                  backgroundColor: '#657150',
                  borderColor: '#657150',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 600,
                  boxShadow: '0 2px 6px rgba(101, 113, 80, 0.3)',
                }}
              >
                <Heart size={14} fill="#ffffff" color="#ffffff" />
                <span>Send Wish</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
