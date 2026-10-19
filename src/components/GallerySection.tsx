import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Engagement gallery images
import g1 from '../assets/images/gallery/gallery1n1.png';
import g2 from '../assets/images/gallery/gallery1n2.png';
import g3 from '../assets/images/gallery/gallery1n3.png';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  subcaption: string;
  objectPosition: string;
}

export const GallerySection: React.FC = () => {
  const images: GalleryImage[] = [
    {
      src: g1,
      alt: 'Akhil Mathew & Sneha Sabu - Joyful Moments',
      caption: 'Joyful Hearts',
      subcaption: 'Akhil & Sneha',
      objectPosition: 'center 8%', // Keeps Akhil's face and Sneha clearly framed
    },
    {
      src: g2,
      alt: 'Akhil Mathew & Sneha Sabu - By the Sea',
      caption: 'Serene Promises',
      subcaption: 'Together as One',
      objectPosition: 'center 45%', // Perfectly balances the couple & sea horizon
    },
    {
      src: g3,
      alt: 'Akhil Mathew & Sneha Sabu - Together on the Journey',
      caption: 'Sacred Journey',
      subcaption: 'Walking in God’s Grace',
      objectPosition: 'center 20%', // Frames faces and figures naturally on the steps
    },
  ];

  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowLeft') setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      if (e.key === 'ArrowRight') setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, images.length]);

  return (
    <section className="wpo-portfolio-section section-padding" id="gallery" style={{ padding: '70px 0 95px', background: '#fcfbfa' }}>
      {/* Title Section */}
      <div className="wpo-section-title text-center mb-5" style={{ padding: '0 15px' }}>
        <span
          style={{
            fontFamily: "'Sail', cursive",
            fontSize: '28px',
            color: '#C8A898',
            display: 'block',
            marginBottom: '4px',
          }}
        >
          Sweet Memories
        </span>
        <h2
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '40px',
            fontWeight: 600,
            color: '#34382e',
            margin: '0 0 10px',
            letterSpacing: '0.5px',
          }}
        >
          Our Gallery
        </h2>
        <div className="d-flex align-items-center justify-content-center gap-2" style={{ margin: '8px auto 0', opacity: 0.75 }}>
          <span style={{ width: '35px', height: '1px', background: '#C8A898' }}></span>
          <span style={{ color: '#C8A898', fontSize: '14px' }}>&bull;</span>
          <span style={{ width: '35px', height: '1px', background: '#C8A898' }}></span>
        </div>
      </div>

      {/* 3 Balanced Gallery Cards */}
      <div className="container" style={{ maxWidth: '1160px' }}>
        <div className="row g-4 justify-content-center">
          {images.map((img, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div
                className="position-relative overflow-hidden group shadow-md"
                style={{
                  cursor: 'pointer',
                  borderRadius: '16px',
                  backgroundColor: '#f1ede7',
                  aspectRatio: '3/4',
                  border: '1px solid #ebd9c8',
                  transition: 'all 0.35s ease',
                }}
                onClick={() => setActiveModalIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-100 h-100 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    objectPosition: img.objectPosition,
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Subtle Gradient & Hover Overlay */}
                <div
                  className="position-absolute inset-0 d-flex flex-column justify-content-between p-4 transition-all duration-300"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(52, 56, 46, 0.78) 0%, rgba(52, 56, 46, 0.15) 50%, rgba(0,0,0,0) 100%)',
                    opacity: 0.9,
                  }}
                >
                  {/* Top Right Zoom Icon badge */}
                  <div className="d-flex justify-content-end">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: '38px',
                        height: '38px',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        color: '#657150',
                        backdropFilter: 'blur(4px)',
                      }}
                      title="View full image"
                    >
                      <Maximize2 size={18} color="#657150" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div className="text-white">
                    <p
                      style={{
                        fontFamily: "'Sail', cursive",
                        fontSize: '22px',
                        color: '#fdf9f3',
                        margin: '0 0 2px',
                        lineHeight: 1.2,
                        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                      }}
                    >
                      {img.caption}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '13px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: '#e2d7c5',
                        fontWeight: 500,
                      }}
                    >
                      {img.subcaption}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && (
        <div
          className="position-fixed inset-0 d-flex align-items-center justify-content-center"
          style={{
            zIndex: 10000,
            backgroundColor: 'rgba(15, 17, 13, 0.94)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '20px',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModalIndex(null)}
            className="position-absolute btn text-white d-flex align-items-center justify-content-center"
            style={{
              top: '20px',
              right: '25px',
              zIndex: 10001,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
            }}
            aria-label="Close"
          >
            <X size={26} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="position-absolute btn text-white d-flex align-items-center justify-content-center"
            style={{
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              zIndex: 10001,
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="position-absolute btn text-white d-flex align-items-center justify-content-center"
            style={{
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              zIndex: 10001,
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl text-center"
            style={{ maxWidth: '900px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'inline-block',
                maxHeight: '78vh',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={images[activeModalIndex].src}
                alt={images[activeModalIndex].alt}
                className="img-fluid"
                style={{
                  maxHeight: '78vh',
                  maxWidth: '90vw',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>

            <div className="mt-3 text-center">
              <p
                className="text-white mb-1"
                style={{
                  fontFamily: "'Sail', cursive",
                  fontSize: '26px',
                  color: '#f8eedf',
                  letterSpacing: '0.5px',
                }}
              >
                Akhil Mathew &amp; Sneha Sabu
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '13px',
                  color: '#b0b3ab',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Photo {activeModalIndex + 1} of {images.length} &bull; {images[activeModalIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
