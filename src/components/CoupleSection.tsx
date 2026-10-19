import React from 'react';

// Local couple assets imported from src/assets/images/couple
import groomImg from '../assets/images/couple/akhil2.jpg';
import brideImg from '../assets/images/couple/popp1.jpg';
import imageBg from '../assets/images/couple/image-bg.svg';
import mask1 from '../assets/images/couple/mask-1.svg';
import mask2 from '../assets/images/couple/mask-2.svg';

export const CoupleSection: React.FC = () => {
  return (
    <section className="wpo-couple-section section-padding" id="couple" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            {/* Groom: Akhil Mathew */}
            <div className="col col-md-12 col-12 mb-5 mb-md-0">
              <div className="couple-item d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start">
                <div
                  className="couple-img-wrap"
                  style={{
                    maxWidth: '350px',
                    maxHeight: '350px',
                    position: 'relative',
                    marginRight: '30px',
                  }}
                >
                  <div
                    className="couple-img"
                    style={{
                      maskImage: `url(${mask1})`,
                      WebkitMaskImage: `url(${mask1})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      overflow: 'hidden',
                      width: '350px',
                      height: '350px',
                    }}
                  >
                    <img
                      src={groomImg}
                      alt="Akhil Mathew"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 6%', display: 'block' }}
                    />
                  </div>
                  <div className="c-shape" style={{ position: 'absolute', left: '-20px', top: '-20px', zIndex: -1 }}>
                    <img
                      src={imageBg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="couple-text mt-4 mt-md-0">
                  <h3 style={{ fontFamily: "'Sail', cursive", fontSize: '42px', color: '#101010', marginBottom: '10px' }}>
                    Akhil Mathew
                  </h3>
                  <p style={{ fontSize: '18px', color: '#34382e', maxWidth: '420px', lineHeight: '1.6', fontWeight: 500, margin: '0 0 6px' }}>
                    Son of Mr. Mathew &amp; Mrs. Molly Mathai
                  </p>
                  <p style={{ fontSize: '15px', color: '#7a8072', fontStyle: 'italic', maxWidth: '380px', lineHeight: '1.5' }}>
                    &ldquo;Walking forward with faith, devotion, and joy in God&apos;s plan.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bride: Sneha Sabu */}
            <div className="col col-md-12 col-12 mt-5">
              <div className="couple-item d-flex flex-column flex-md-row-reverse align-items-center justify-content-center text-center text-md-end">
                <div
                  className="couple-img-wrap"
                  style={{
                    maxWidth: '350px',
                    maxHeight: '350px',
                    position: 'relative',
                    marginLeft: '30px',
                  }}
                >
                  <div
                    className="couple-img"
                    style={{
                      maskImage: `url(${mask2})`,
                      WebkitMaskImage: `url(${mask2})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      overflow: 'hidden',
                      width: '350px',
                      height: '350px',
                    }}
                  >
                    <img
                      src={brideImg}
                      alt="Sneha Sabu"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
                    />
                  </div>
                  <div className="c-shape" style={{ position: 'absolute', right: '-20px', top: '-20px', zIndex: -1 }}>
                    <img
                      src={imageBg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="couple-text mt-4 mt-md-0">
                  <h3 style={{ fontFamily: "'Sail', cursive", fontSize: '42px', color: '#101010', marginBottom: '10px' }}>
                    Sneha Sabu
                  </h3>
                  <p style={{ fontSize: '18px', color: '#34382e', maxWidth: '420px', lineHeight: '1.6', fontWeight: 500, margin: '0 0 6px' }}>
                    Daughter of Mr. Sabu &amp; Mrs. Leena Sabu
                  </p>
                  <p style={{ fontSize: '15px', color: '#7a8072', fontStyle: 'italic', maxWidth: '380px', lineHeight: '1.5' }}>
                    &ldquo;Embracing this new covenant with grace, warmth, and faith in Christ.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVG Curve Wave */}
      <div className="shape-1" style={{ position: 'absolute', width: '100%', bottom: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1920 692" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
          <g opacity="0.1">
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="#657150"
              strokeWidth="2"
            />
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <g opacity="0.1">
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="#657150"
              strokeWidth="2"
            />
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <path
            d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
            fill="#f4ede6"
          />
          <path
            d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
            fill="#f4ede6"
          />
        </svg>
      </div>
    </section>
  );
};
