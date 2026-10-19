import React from 'react';

interface EventsSectionProps {
  onOpenWishModal?: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = () => {
  return (
    <section className="section-padding" id="location" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 16px' }}>
        {/* Section Title */}
        <div className="text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: "'Sail', cursive",
              fontSize: '26px',
              color: '#C8A898',
              display: 'block',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            When &amp; Where
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 42px)',
              fontWeight: 500,
              color: '#101010',
              marginTop: '5px',
              textAlign: 'center',
            }}
          >
            Engagement Ceremony
          </h2>
        </div>

        {/* Centered Event Card */}
        <div className="d-flex justify-content-center" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div
            className="shadow-sm"
            style={{
              backgroundColor: '#fbfbfb',
              border: '1px solid #ebd9c8',
              borderRadius: '16px',
              maxWidth: '460px',
              width: '100%',
              padding: '36px 24px',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                gap: '16px',
              }}
            >
              {/* Date & Time */}
              <div
                style={{
                  fontSize: '19px',
                  fontWeight: 500,
                  color: '#101010',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <div>Monday, December 28, 2026</div>
                <div style={{ fontSize: '17px', color: '#657150', marginTop: '3px' }}>
                  11:30 AM IST
                </div>
              </div>

              {/* Location Venue */}
              <div
                style={{
                  fontSize: '21px',
                  fontWeight: 600,
                  color: '#101010',
                  lineHeight: '1.4',
                  letterSpacing: '0.2px',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                Mensa Christi Parish Hall, Edoor
              </div>

              {/* Non-clickable Phone Number */}
              <div
                style={{
                  fontSize: '17px',
                  color: '#5C5C5C',
                  fontWeight: 400,
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                +91 6235451944
              </div>

              {/* Location Link with Arrow */}
              <div style={{ paddingTop: '6px', textAlign: 'center', width: '100%' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mensa+Christi+Parish+Hall,+Edoor,+Kannur,+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    color: '#657150',
                    textDecoration: 'underline',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                >
                  Location ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
