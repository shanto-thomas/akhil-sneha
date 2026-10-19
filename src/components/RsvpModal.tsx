import React, { useState } from 'react';
import { X, Check, Heart, Calendar, Users, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateGoogleCalendarUrl } from '../utils/calendar';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declining'>('attending');
  const [guestCount, setGuestCount] = useState(1);
  const [mealPreference, setMealPreference] = useState('kerala-nonveg');
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const existingRsvps = JSON.parse(localStorage.getItem('akhil_sneha_rsvps') || '[]');
      existingRsvps.push({
        id: Date.now(),
        name,
        phone,
        email,
        attendance,
        guestCount,
        mealPreference,
        note,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('akhil_sneha_rsvps', JSON.stringify(existingRsvps));
    } catch {
      // storage fallback
    }

    if (attendance === 'attending') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#657150', '#C8A898', '#242620', '#f4ede6'],
      });
    }

    setIsSuccess(true);
  };

  const handleAddToCalendar = () => {
    // 28.12.2026 11:30 AM IST -> 06:00 UTC
    const url = generateGoogleCalendarUrl(
      'Akhil Mathew & Sneha Sabu Engagement Ceremony',
      'Christian Engagement and Ring Blessing followed by Luncheon Reception at Mensa Christi Parish Hall, Edoor, Kannur.',
      'Mensa Christi Parish Hall, Edoor, Kannur District, Kerala',
      '20261228T060000Z',
      '20261228T103000Z'
    );
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" style={{ zIndex: 10050 }}>
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-fade-in">
        {/* Header in #242620 */}
        <div className="bg-[#242620] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A898] font-semibold mb-1">
            <span>RSVP &bull; Christian Engagement</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white" style={{ fontFamily: "'Sail', cursive", fontSize: '32px' }}>
            Akhil Mathew &amp; Sneha Sabu
          </h3>
          <p className="text-xs text-stone-300 font-serif italic mt-0.5">
            Monday, December 28, 2026 &bull; 11:30 AM &bull; Mensa Christi Parish Hall, Edoor
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-[#fdfdfd]">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f4ede6] border-2 border-[#657150] mx-auto flex items-center justify-center text-[#657150] shadow-sm">
                <Check className="w-8 h-8 text-[#657150]" />
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#101010]" style={{ fontFamily: "'Sail', cursive" }}>
                {attendance === 'attending'
                  ? 'We Can’t Wait to Celebrate With You!'
                  : 'Thank You for Letting Us Know'}
              </h4>

              <p className="text-sm text-[#5C5C5C] leading-relaxed max-w-md mx-auto">
                {attendance === 'attending'
                  ? `Thank you, ${name}! Your RSVP for ${guestCount} guest(s) has been lovingly recorded. We look forward to seeing you at Mensa Christi Parish Hall, Edoor on December 28!`
                  : `Thank you, ${name}. Your warm blessings and prayers mean the world to Akhil & Sneha.`}
              </p>

              {attendance === 'attending' && (
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleAddToCalendar}
                    className="px-5 py-2.5 bg-[#657150] hover:bg-[#525d3f] text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-xs border-0"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Add to Google Calendar</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 bg-white hover:bg-stone-100 text-[#5C5C5C] text-xs font-semibold rounded-full border border-stone-200 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Attendance Choice */}
              <div>
                <label className="block text-xs font-semibold text-[#101010] mb-2 uppercase tracking-wider">
                  Will you attend? <span className="text-amber-700">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      attendance === 'attending'
                        ? 'bg-[#657150] text-white border-[#657150] shadow-xs'
                        : 'bg-white text-[#5C5C5C] border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>Joyfully Attend</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('declining')}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      attendance === 'declining'
                        ? 'bg-[#242620] text-white border-[#242620] shadow-xs'
                        : 'bg-white text-[#5C5C5C] border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#101010] mb-1">
                  Full Name <span className="text-amber-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#657150] text-[#101010]"
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#101010] mb-1">
                    Phone / WhatsApp <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98460 00000"
                    className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#657150] text-[#101010]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#101010] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#657150] text-[#101010]"
                  />
                </div>
              </div>

              {attendance === 'attending' && (
                <>
                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs font-semibold text-[#101010] mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#657150]" />
                        <span>Number of Guests Attending</span>
                      </span>
                      <span className="text-[#657150] font-bold">{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</span>
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setGuestCount(num)}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            guestCount === num
                              ? 'bg-[#657150] text-white border-[#657150]'
                              : 'bg-white text-[#5C5C5C] border-stone-200 hover:bg-stone-50'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Meal Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-[#101010] mb-1 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#657150]" />
                      <span>Luncheon Feast Preference</span>
                    </label>
                    <select
                      value={mealPreference}
                      onChange={(e) => setMealPreference(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#657150] text-[#101010]"
                    >
                      <option value="kerala-nonveg">Traditional Kerala Christian Feast (Non-Veg)</option>
                      <option value="kerala-veg">Kerala Vegetarian Sadhya (Veg)</option>
                      <option value="continental">Continental &amp; Dessert Buffet</option>
                      <option value="kids">Kids Friendly Menu</option>
                    </select>
                  </div>
                </>
              )}

              {/* Note / Message */}
              <div>
                <label className="block text-xs font-semibold text-[#101010] mb-1">
                  Personal Note or Dietary Requirements
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Leave a message for Akhil and Sneha..."
                  className="w-full px-4 py-2 text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#657150] text-[#101010] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#657150] hover:bg-[#525d3f] text-white text-sm font-semibold rounded-xl shadow-sm transition-all duration-200 cursor-pointer border-0"
              >
                Submit RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
