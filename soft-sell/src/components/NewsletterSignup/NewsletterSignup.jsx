import React, { useState, useContext } from "react";
import Context from "../../context/Context";

const NewsletterSignup = () => {
  const { darkMode } = useContext(Context);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  React.useEffect(() => {
    // Check if user already subscribed (persisted)
    const alreadySubscribed = localStorage.getItem('newsletter_subscribed');
    if (alreadySubscribed) {
      setSubmitted(true);
    } else if (!submitted && document.activeElement !== null) {
      // Focus the input on mount if not submitted
      const input = document.querySelector('#newsletter-email');
      if (input) input.focus();
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setLoading(true);
    try {
      // TODO: Replace with real API call
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      await new Promise(res => setTimeout(res, 1000)); // Simulate network delay
      setSubmitted(true);
      setEmail("");
      localStorage.setItem('newsletter_subscribed', '1');
    } catch (err) {
      setError("There was a problem subscribing. Please try again later.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setLoading(false);
  };

  return (
    <section className="flex justify-center py-12 px-4">
      <div
        className={`w-full max-w-xl rounded-2xl shadow-lg p-8 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} group hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300 animate-cardfadein`}
        style={{ willChange: 'transform, box-shadow' }}
      >
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'} animate-slidefadein`}>Stay in the Loop!</h2>
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-blue-700'} animate-slidefadein2`}>Sign up for our newsletter to get the latest updates, resources, and exclusive offers.</p>
        {submitted ? (
          <div className="text-green-500 font-semibold animate-fadein" role="status" aria-live="polite">Thank you for subscribing!</div>
        ) : (
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 items-center justify-center ${shake ? 'animate-shake' : ''}`} aria-label="Newsletter signup form">
            <input
              id="newsletter-email"
              type="email"
              className={`flex-1 px-4 py-2 rounded border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'bg-gray-800 text-white border-gray-700 placeholder-gray-400' : 'bg-white text-blue-900 border-blue-200 placeholder-blue-400'} focus:scale-105 hover:scale-105 transition-transform`}
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
              aria-invalid={!!error}
              aria-describedby={error ? 'newsletter-error' : undefined}
              autoComplete="email"
              onKeyDown={e => { if (e.key === 'Enter') e.target.form.requestSubmit(); }}
              disabled={submitted || loading}
            />
            <button
              type="submit"
              className={`bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200 ${(submitted || loading) ? 'opacity-60 cursor-not-allowed' : ''} focus:scale-105 hover:scale-105 transition-transform`}
              aria-label="Subscribe to newsletter"
              disabled={submitted || loading}
            >{loading ? 'Subscribing...' : submitted ? 'Subscribed' : 'Subscribe'}</button>
          </form>
        )}
        {error && <div className="text-red-500 mt-2 animate-shakefade" id="newsletter-error" role="alert" aria-live="assertive">{error}</div>}
        <style>{`
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
            100% { transform: translateX(0); }
          }
          .animate-shake { animation: shake 0.5s; }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadein { animation: fadein 0.7s; }
          @keyframes cardfadein {
            from { opacity: 0; transform: translateY(32px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-cardfadein { animation: cardfadein 0.7s cubic-bezier(.4,2,.6,1) both; }
          @keyframes slidefadein {
            from { opacity: 0; transform: translateY(-16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slidefadein { animation: slidefadein 0.7s 0.1s both; }
          @keyframes slidefadein2 {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slidefadein2 { animation: slidefadein2 0.7s 0.2s both; }
          @keyframes shakefade {
            0% { opacity: 0.7; transform: translateX(0); }
            20% { opacity: 1; transform: translateX(-8px); }
            40% { opacity: 1; transform: translateX(8px); }
            60% { opacity: 1; transform: translateX(-6px); }
            80% { opacity: 1; transform: translateX(6px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-shakefade { animation: shakefade 0.5s; }
        `}</style>
      </div>
    </section>
  );
};

export default NewsletterSignup;
