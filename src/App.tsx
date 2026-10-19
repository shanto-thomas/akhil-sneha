import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoupleSection } from './components/CoupleSection';
import { InvitationText } from './components/InvitationText';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { WishesList } from './components/WishesList';
import { WishModal } from './components/WishModal';
import { RsvpModal } from './components/RsvpModal';
import { Footer } from './components/Footer';
import { Wish } from './types';
import { Heart, Volume2, Music } from 'lucide-react';
import { weddingAudio } from './utils/audioPlayer';

const DEFAULT_WISHES: Wish[] = [
  {
    id: 'w_anju',
    name: 'Anju George',
    relation: 'Friend',
    message: 'Wishing you both a lifetime of love, happiness, and God’s abundant blessings as you begin this beautiful journey together. Congratulations Akhil & Sneha! 💍✨',
    date: 'Recently',
    likes: 12,
  },
];

export default function App() {
  const [wishModalOpen, setWishModalOpen] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    setIsPlayingMusic(weddingAudio.getIsPlaying());
    const unsub = weddingAudio.subscribe((playing) => {
      setIsPlayingMusic(playing);
    });

    // Web browsers require user interaction to play audio.
    // Trigger on first tap/click anywhere on the page for a smooth ambient experience.
    const handleFirstGesture = async () => {
      if (!weddingAudio.getIsPlaying()) {
        await weddingAudio.play();
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });

    return () => {
      unsub();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const stored = localStorage.getItem('akhil_sneha_wishes');
      if (stored) {
        const parsed: Wish[] = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return DEFAULT_WISHES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('akhil_sneha_wishes', JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleAddWish = (newWish: Wish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  const handleLikeWish = (id: string) => {
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      {/* Header */}
      <Navbar
        onOpenWishModal={() => setWishModalOpen(true)}
        onOpenRsvpModal={() => setRsvpModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Couple Section */}
      <CoupleSection />

      {/* Invitation Blessing Verse */}
      <InvitationText />

      {/* Gallery Section */}
      <GallerySection />

      {/* When & Where Event Section (Ceremony at Mensa Christi) */}
      <EventsSection />

      {/* Wishes Stream */}
      <WishesList
        wishes={wishes}
        onOpenWishModal={() => setWishModalOpen(true)}
        onLikeWish={handleLikeWish}
      />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <WishModal
        isOpen={wishModalOpen}
        onClose={() => setWishModalOpen(false)}
        onAddWish={handleAddWish}
      />

      <RsvpModal
        isOpen={rsvpModalOpen}
        onClose={() => setRsvpModalOpen(false)}
      />

      {/* Floating Action Buttons (Hidden when any modal is open to avoid blocking form buttons) */}
      {!wishModalOpen && !rsvpModalOpen && (
        <>
          {/* Floating Send Wishes CTA on bottom right */}
          <button
            onClick={() => setWishModalOpen(true)}
            className="rsvp-control-float shadow"
            title="Send Wishes to Akhil & Sneha"
          >
            <Heart size={15} fill="#ea6e53" color="#ea6e53" />
            <span>Send Wishes</span>
          </button>

          {/* Floating Audio Player Button on bottom right */}
          <button
            onClick={async () => {
              await weddingAudio.toggle();
            }}
            className={`audio-control-float shadow ${isPlayingMusic ? 'audio-spinning' : ''}`}
            title={isPlayingMusic ? 'Mute ambient melody' : 'Play ambient wedding melody'}
            aria-label="Toggle ambient music"
          >
            {isPlayingMusic ? (
              <Volume2 size={20} className="text-white" />
            ) : (
              <Music size={20} className="text-white" />
            )}
          </button>
        </>
      )}
    </div>
  );
}
