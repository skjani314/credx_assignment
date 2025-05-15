import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { darkMode } = useContext(Context);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Required';
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.company) newErrors.company = 'Required';
    if (!form.type) newErrors.type = 'Select a type';
    if (!form.message) newErrors.message = 'Message required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setLoading(true);
    setSubmitError("");
    try {
      // Send form data to backend API endpoint for email sending
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Failed to send');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', company: '', type: '', message: '' });
      setErrors({});
    } catch (err) {
      setSubmitError("There was a problem sending your message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section id='contact' className={`py-20 px-4 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-b from-blue-900 via-gray-800 to-blue-900' : 'bg-gradient-to-b from-blue-100 via-white to-blue-50'}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-4xl font-extrabold text-center mb-8 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Contact Us</h2>
        <p className={`mb-8 text-center text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>Have questions or want a free valuation? Fill out the form and our team will get back to you promptly.</p>
        {submitted && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 text-center font-semibold border border-green-300 animate-fade-in">Thank you! Your message has been received.</div>
        )}
        {submitError && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-800 text-center font-semibold border border-red-300 animate-fade-in">{submitError}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white/95 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 transition-colors duration-300 border border-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Name" className={`w-full p-3 border rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border-gray-700 placeholder-gray-400' : 'bg-blue-50 text-blue-900 border-blue-200 placeholder-blue-400'}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input type="email" placeholder="Email" className={`w-full p-3 border rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border-gray-700 placeholder-gray-400' : 'bg-blue-50 text-blue-900 border-blue-200 placeholder-blue-400'}`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Company" className={`w-full p-3 border rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border-gray-700 placeholder-gray-400' : 'bg-blue-50 text-blue-900 border-blue-200 placeholder-blue-400'}`} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
            <div>
              <select className={`w-full p-3 border rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-blue-50 text-blue-900 border-blue-200'}`} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option value="">Select License Type</option>
                <option value="software">Software</option>
                <option value="cloud">Cloud</option>
                <option value="enterprise">Enterprise</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
            </div>
          </div>
          <div>
            <textarea placeholder="Your Message" rows={4} className={`w-full p-3 border rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white border-gray-700 placeholder-gray-400' : 'bg-blue-50 text-blue-900 border-blue-200 placeholder-blue-400'}`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-md" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
