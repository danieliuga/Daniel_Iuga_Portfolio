import { useEffect, useRef, useState } from 'react';
import { HiX } from 'react-icons/hi';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const form = e.currentTarget;
      const res = await fetch('https://formspree.io/f/mldryvvl', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-4 right-4 text-[#666] hover:text-navy transition-colors"
        >
          <HiX size={20} />
        </button>

        <h2 id="modal-title" className="font-lora font-bold text-2xl text-navy mb-6">
          Contact Me
        </h2>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl">✓</div>
            <p className="font-lora font-bold text-lg text-navy">Message sent!</p>
            <p className="font-sans text-sm text-[#666]">I'll get back to you as soon as possible.</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-navy text-cream-text font-sans text-sm font-semibold rounded hover:bg-navy/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="modal-email" className="block font-sans text-sm font-semibold text-navy mb-1">
                Email
              </label>
              <input
                id="modal-email"
                ref={firstInputRef}
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2.5 border border-cream-border rounded-lg font-sans text-sm text-navy focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="modal-message" className="block font-sans text-sm font-semibold text-navy mb-1">
                Message
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 border border-cream-border rounded-lg font-sans text-sm text-navy resize-none focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            {status === 'error' && (
              <p className="mb-4 text-sm font-sans text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 border border-cream-border font-sans text-sm text-[#666] hover:border-navy hover:text-navy transition-colors rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-2 bg-brown text-white font-sans text-sm font-semibold rounded-lg hover:bg-brown/90 disabled:opacity-60 transition-colors"
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
