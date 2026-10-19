import React, { useState, useEffect } from 'react';

// Local assets imported from src/assets/images/slider
import shape1 from '../assets/images/slider/shape1.svg';
import shape2 from '../assets/images/slider/shape2.svg';
import shape3 from '../assets/images/slider/shape3.svg';
import shape4 from '../assets/images/slider/shape4.svg';
import shape5 from '../assets/images/slider/shape5.svg';
import shape6 from '../assets/images/slider/shape6.svg';
import bgShape from '../assets/images/slider/bg-shape.png';
import poppyCouple from '../assets/images/slider/poppycouple1.jpg';

export const Hero: React.FC = () => {
  // Engagement date: 28.12.2026, 11:30 AM
  const targetDate = new Date('2026-12-28T11:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="static-hero position-relative" id="home" style={{ paddingTop: '10px', minHeight: '850px' }}>
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7 col-12">
                <div
                  className="wpo-static-hero-inner"
                  style={{
                    paddingTop: '20px',
                    paddingBottom: '30px',
                  }}
                >
                  {/* Decorative Leaf Shape 1 */}
                  <div className="shape-1" style={{ marginBottom: '12px' }}>
                    <img
                      src={shape1}
                      alt="Floral shape"
                      style={{ margin: '0 auto', display: 'block', maxWidth: '280px' }}
                    />
                  </div>

                  {/* Christian Engagement Tag */}
                  <div className="text-center" style={{ marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '13px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#657150',
                        fontWeight: 600,
                      }}
                    >
                      Christian Engagement
                    </span>
                  </div>

                  {/* Clean Title: Akhil Mathew & Sneha Sabu */}
                  <div className="slide-title">
                    <h2
                      style={{
                        fontFamily: "'Sail', cursive",
                        fontSize: 'clamp(38px, 5.5vw, 75px)',
                        color: '#101010',
                        textAlign: 'center',
                        fontWeight: 400,
                        lineHeight: 1.25,
                        margin: '6px 0 14px',
                        textTransform: 'capitalize',
                      }}
                    >
                      Akhil Mathew &amp; Sneha Sabu
                    </h2>
                  </div>

                  {/* Subtitle with date and time */}
                  <div className="slide-text text-center">
                    <p
                      style={{
                        fontSize: 'clamp(17px, 2.2vw, 22px)',
                        color: '#5C5C5C',
                        textAlign: 'center',
                        marginBottom: '30px',
                        fontFamily: "'Jost', 'Mulish', sans-serif",
                        lineHeight: 1.6,
                      }}
                    >
                      Joyfully invite you to celebrate their engagement
                      <br />
                      <span style={{ color: '#101010', fontWeight: 500 }}>
                        Monday, December 28, 2026 &bull; 11:30 AM
                      </span>
                    </p>
                  </div>

                  {/* Countdown Clock */}
                  <div className="wpo-wedding-date">
                    <div className="clock-grids">
                      <div
                        id="clock"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: 'clamp(12px, 3.5vw, 36px)',
                          flexWrap: 'wrap',
                        }}
                      >
                        {/* Days */}
                        <div style={{ textAlign: 'center', minWidth: '70px' }}>
                          <div
                            className="time"
                            style={{
                              fontFamily: "'Sail', cursive",
                              fontSize: 'clamp(42px, 5.5vw, 65px)',
                              color: '#657150',
                              lineHeight: 1,
                            }}
                          >
                            {String(timeLeft.days).padStart(2, '0')}
                          </div>
                          <span
                            style={{
                              color: '#5C5C5C',
                              fontSize: '17px',
                              fontFamily: "'Jost', sans-serif",
                              display: 'block',
                              marginTop: '5px',
                            }}
                          >
                            Days
                          </span>
                        </div>

                        {/* Hours */}
                        <div style={{ textAlign: 'center', minWidth: '70px' }}>
                          <div
                            className="time"
                            style={{
                              fontFamily: "'Sail', cursive",
                              fontSize: 'clamp(42px, 5.5vw, 65px)',
                              color: '#657150',
                              lineHeight: 1,
                            }}
                          >
                            {String(timeLeft.hours).padStart(2, '0')}
                          </div>
                          <span
                            style={{
                              color: '#5C5C5C',
                              fontSize: '17px',
                              fontFamily: "'Jost', sans-serif",
                              display: 'block',
                              marginTop: '5px',
                            }}
                          >
                            Hours
                          </span>
                        </div>

                        {/* Minutes */}
                        <div style={{ textAlign: 'center', minWidth: '70px' }}>
                          <div
                            className="time"
                            style={{
                              fontFamily: "'Sail', cursive",
                              fontSize: 'clamp(42px, 5.5vw, 65px)',
                              color: '#657150',
                              lineHeight: 1,
                            }}
                          >
                            {String(timeLeft.minutes).padStart(2, '0')}
                          </div>
                          <span
                            style={{
                              color: '#5C5C5C',
                              fontSize: '17px',
                              fontFamily: "'Jost', sans-serif",
                              display: 'block',
                              marginTop: '5px',
                            }}
                          >
                            Mins
                          </span>
                        </div>

                        {/* Seconds */}
                        <div style={{ textAlign: 'center', minWidth: '70px' }}>
                          <div
                            className="time"
                            style={{
                              fontFamily: "'Sail', cursive",
                              fontSize: 'clamp(42px, 5.5vw, 65px)',
                              color: '#657150',
                              lineHeight: 1,
                            }}
                          >
                            {String(timeLeft.seconds).padStart(2, '0')}
                          </div>
                          <span
                            style={{
                              color: '#5C5C5C',
                              fontSize: '17px',
                              fontFamily: "'Jost', sans-serif",
                              display: 'block',
                              marginTop: '5px',
                            }}
                          >
                            Secs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Leaf Shape 2 */}
                  <div className="shape-2" style={{ marginTop: '15px' }}>
                    <img
                      src={shape2}
                      alt="Floral shape"
                      style={{ margin: '0 auto', display: 'block', maxWidth: '280px' }}
                    />
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Hero Image Frame with poppycouple1.jpg */}
      <div className="static-hero-right">
        <div className="static-hero-img scene" id="scene">
          <div className="static-hero-img-inner" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <img
              src={poppyCouple}
              alt="Akhil Mathew & Sneha Sabu"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '520px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
          </div>
          <div className="static-hero-shape-1">
            <span className="layer">
              <img src={shape3} alt="" />
            </span>
          </div>
          <div className="static-hero-shape-2">
            <span className="layer">
              <img src={shape4} alt="" />
            </span>
          </div>
          <div className="static-hero-shape-3">
            <span className="layer">
              <img src={shape5} alt="" />
            </span>
          </div>
          <div className="static-hero-shape-4">
            <img src={shape6} alt="" />
          </div>
        </div>
        <div className="static-hero-img-bg">
          <img src={bgShape} alt="" />
        </div>
      </div>

      {/* Curvy Right Beige Shape SVG */}
      <div className="right-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 650 597"
          fill="none"
        >
          <path
            d="M717 0C717 0 527.91 0 475.696 129.736C423.481 259.472 501.092 358.185 396.683 423.034C292.274 487.902 74.9839 485.573 26.2847 646.096C-22.3947 806.598 11.4538 863 11.4538 863L653.509 803.776L717 0Z"
            fill="#f4ede6"
          />
        </svg>
      </div>
    </section>
  );
};
