import React from 'react';

export const InvitationText: React.FC = () => {
  return (
    <section className="section-padding" style={{ padding: '75px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9 col-md-11 col-12">
            {/* Christian Cross Symbol and Scripture */}
            <div className="mb-4">
              <span
                style={{
                  display: 'inline-block',
                  color: '#657150',
                  fontSize: '26px',
                  lineHeight: '1',
                  marginBottom: '10px',
                }}
              >
                ✝
              </span>
              <p
                style={{
                  fontFamily: "'Sail', cursive",
                  fontSize: 'clamp(24px, 3.2vw, 32px)',
                  color: '#C8A898',
                  marginBottom: '6px',
                  letterSpacing: '0.5px',
                }}
              >
                &ldquo;I have found the one whom my soul loves&rdquo;
              </p>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#8c9182',
                  fontWeight: 500,
                }}
              >
                — Song of Solomon 3:4 —
              </span>
            </div>

            {/* Decorative Divider */}
            <div
              style={{
                width: '60px',
                height: '2px',
                backgroundColor: '#e6ded7',
                margin: '0 auto 28px',
              }}
            />

            {/* Main Engagement Invitation Text */}
            <div
              style={{
                fontSize: '18px',
                color: '#5C5C5C',
                lineHeight: '1.9',
                fontFamily: "'Jost', 'Mulish', sans-serif",
              }}
            >
              <p className="mb-3" style={{ fontSize: '19px', color: '#34382e', fontWeight: 500 }}>
                By the grace of God Almighty,
                <br />
                and with the blessings of our parents and families,
              </p>

              <p className="mb-4" style={{ maxWidth: '620px', margin: '0 auto 20px', fontSize: '18px', lineHeight: '1.8' }}>
                we joyfully invite you to celebrate our engagement
                <br />
                as we exchange rings and pledge our love and devotion before God.
              </p>

              <p
                style={{
                  fontFamily: "'Sail', cursive",
                  fontSize: '24px',
                  color: '#657150',
                  margin: 0,
                }}
              >
                Your prayers and loving presence will make our celebration truly blessed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
