import React from 'react';

// Local footer shapes imported from src/assets/images/footer
import footerShape1 from '../assets/images/footer/footer-shape-1.svg';
import footerShape2 from '../assets/images/footer/footer-shape-2.svg';

export const Footer: React.FC = () => {

  return (
    <footer
      className="wpo-site-footer position-relative"
      id="lastDiv"
      style={{
        backgroundColor: '#242620',
        padding: '80px 0',
        overflow: 'hidden',
        color: '#c5c5c5',
      }}
    >
      <div className="wpo-upper-footer position-relative" style={{ zIndex: 1 }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-sm-12">
              <div className="widget about-widget text-center">
                <div className="logo widget-title mb-3">
                  <a
                    className="logo text-decoration-none"
                    href="#home"
                    style={{
                      fontFamily: "'Sail', cursive",
                      fontSize: '44px',
                      color: '#ffffff',
                    }}
                  >
                    Akhil Mathew &amp; Sneha Sabu
                  </a>
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '620px', margin: '0 auto', color: '#b0b3ab' }}>
                  &ldquo;And now these three remain: faith, hope, and love. But the greatest of these is love.&rdquo;
                  <br />
                  <span style={{ fontSize: '14px', color: '#C8A898', fontStyle: 'italic', display: 'inline-block', marginTop: '6px' }}>
                    — 1 Corinthians 13:13
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative footer SVG shapes from local src/assets */}
      <div
        className="ft-shape-1 position-absolute"
        style={{
          left: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <img src={footerShape1} alt="" />
      </div>
      <div
        className="ft-shape-2 position-absolute"
        style={{
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <img src={footerShape2} alt="" />
      </div>
    </footer>
  );
};
