import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

interface NavbarProps {
  onOpenWishModal: () => void;
  onOpenRsvpModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWishModal, onOpenRsvpModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  React.useEffect(() => {
    setIsPlaying(weddingAudio.getIsPlaying());
    return weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const toggleMusic = async () => {
    await weddingAudio.toggle();
  };

  return (
    <header id="header" style={{ position: 'relative', zIndex: 100, backgroundColor: 'transparent' }}>
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <div className="row align-items-center w-100 m-0">
              {/* Mobile Hamburger Button */}
              <div className="col-3 d-lg-none p-0">
                <button
                  type="button"
                  className="navbar-toggler border-0 p-1"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar block w-6 h-0.5 bg-[#101010] my-1"></span>
                  <span className="icon-bar block w-6 h-0.5 bg-[#101010] my-1"></span>
                  <span className="icon-bar block w-6 h-0.5 bg-[#101010] my-1"></span>
                </button>
              </div>

              {/* Clean Brand: Akhil & Sneha */}
              <div className="col-6 col-lg-3 text-center text-lg-start p-0">
                <a
                  className="navbar-brand text-decoration-none m-0"
                  href="#home"
                  style={{
                    fontFamily: "'Sail', cursive",
                    fontSize: '32px',
                    color: '#101010',
                    fontWeight: 400,
                  }}
                >
                  Akhil &amp; Sneha
                </a>
              </div>

              {/* Clean Nav Links (Home, Couple, Gallery, Location - Video removed per request) */}
              <div className="col-lg-7 d-none d-lg-block">
                <div id="navbar" className="d-flex justify-content-center">
                  <ul className="nav navbar-nav flex-row gap-5 m-0 p-0">
                    <li>
                      <a
                        className="menu-link text-[#101010] hover:text-[#657150] transition-colors"
                        href="#home"
                        style={{ fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-link text-[#101010] hover:text-[#657150] transition-colors"
                        href="#couple"
                        style={{ fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}
                      >
                        Couple
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-link text-[#101010] hover:text-[#657150] transition-colors"
                        href="#gallery"
                        style={{ fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-link text-[#101010] hover:text-[#657150] transition-colors"
                        href="#location"
                        style={{ fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Music and RSVP Action Buttons */}
              <div className="col-3 col-lg-2 d-flex justify-content-end align-items-center gap-2 p-0">
                <button
                  onClick={toggleMusic}
                  className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: isPlaying ? '#657150' : '#f4ede6',
                    color: isPlaying ? '#fff' : '#657150',
                    border: '1px solid #657150',
                  }}
                  title={isPlaying ? 'Mute audio' : 'Play melody'}
                  aria-label="Toggle music"
                >
                  {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>

                <button
                  onClick={onOpenRsvpModal}
                  className="btn btn-sm d-none d-sm-inline-block text-white cursor-pointer"
                  style={{
                    backgroundColor: '#657150',
                    borderRadius: '25px',
                    padding: '6px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: 'none',
                  }}
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="d-lg-none bg-white p-4 shadow-sm border-bottom" style={{ position: 'relative', zIndex: 1000 }}>
            <ul className="list-unstyled mb-0 space-y-2">
              <li>
                <a
                  className="block text-[#101010] py-2 text-base font-medium text-decoration-none"
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block text-[#101010] py-2 text-base font-medium text-decoration-none"
                  href="#couple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Couple
                </a>
              </li>
              <li>
                <a
                  className="block text-[#101010] py-2 text-base font-medium text-decoration-none"
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="block text-[#101010] py-2 text-base font-medium text-decoration-none"
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Location
                </a>
              </li>
              <li className="pt-2 d-flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWishModal();
                  }}
                  className="btn text-white w-50"
                  style={{ backgroundColor: '#657150', borderRadius: '25px', fontSize: '13px' }}
                >
                  Send Wishes
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRsvpModal();
                  }}
                  className="btn text-white w-50"
                  style={{ backgroundColor: '#242620', borderRadius: '25px', fontSize: '13px' }}
                >
                  RSVP
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
