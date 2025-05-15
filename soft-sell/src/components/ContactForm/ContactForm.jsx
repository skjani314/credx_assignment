import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Required';
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.company) newErrors.company = 'Required';
    if (!form.type) newErrors.type = 'Select a type';
    if (!form.message) newErrors.message = 'Message required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    alert('Form submitted!');
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input type="email" placeholder="Email" className="w-full p-3 border rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input type="text" placeholder="Company" className="w-full p-3 border rounded" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

          <select className="w-full p-3 border rounded" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="">Select License Type</option>
            <option value="software">Software</option>
            <option value="cloud">Cloud</option>
            <option value="enterprise">Enterprise</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}

          <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
