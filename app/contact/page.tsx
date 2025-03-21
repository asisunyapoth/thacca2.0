"use client";

import { useState } from 'react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    topic: '',
    subject: '',
    details: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const api_url = "https://vpelomtmamvjoianxzma.supabase.co/rest/v1/Contact";
    const public_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwZWxvbXRtYW12am9pYW54em1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3OTc3NDIsImV4cCI6MjA1NjM3Mzc0Mn0.9CFYgC1VelRmvTfmzAT2oWxRnYXOmTQqkM1lPTXtIlQ";
    
    try {
      // Send data to API endpoint
      // console.log(JSON.stringify(formData));

      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            'apikey': public_key,
            'Authorization': 'Bearer '+public_key,
            'Content-Type': 'application/json',
            'prefer': 'return=minimum'
          },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json().catch(() => null);
      
      // Reset form on success
      setFormData({
        fullname: '',
        email: '',
        topic: '',
        subject: '',
        details: ''
      });
      
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: (error instanceof Error ? error.message : 'Failed to submit the form. Please try again.')
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="lg:max-w-[90vw] mx-auto pt-5 pb-5 px-2">
      <h2 className='text-[42px] font-bold  text-red-700'>ติดต่อเรา (Contact Us)</h2>
      
      {submitResult.message && (
        <div className={`p-4 mb-6 rounded-md ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitResult.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อ นามสกุล (Full Name)
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            อีเมล (Email Address)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            ประเด็นที่ต้องการติดต่อ (Topic)
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a topic</option>
            <option value="Partnership">พันธมิตร (Partnership)</option>
            <option value="Funding">ทุนและการสนับสนุน (Funding & Grants)</option>
            <option value="Project">กิจกรรม (Project)</option>
            <option value="Recommendation">ข้อเสนอแนะ (Recommendation)</option>
            <option value="Others">อื่นๆ (Others)</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            หัวข้อ (Subject)
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
            รายละเอียด (Details)
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-700 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}