import React from 'react'
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, X, CheckCircle } from 'lucide-react';
  
const Booking = ({ doctor, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    fullName: '',
    email: '',
    phone: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const availableTimes = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM',
    '03:30 PM', '04:00 PM'
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <div className="bg-linear-to-r from-indigo-600 to-blue-700 text-white p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-6 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-6">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-20 h-20 rounded-2xl object-cover border-4 border-white/30 shadow-lg"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Book Appointment</h2>
              <p className="mt-2 opacity-90">
                with <span className="font-semibold">{doctor.name}</span>
              </p>
              <p className="text-indigo-100 mt-1">{doctor.speciality}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-6 bg-gray-50 border-b">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold ${step >= 1 ? 'border-indigo-600 bg-indigo-100' : 'border-gray-300'}`}>
              1
            </div>
            <span className="hidden sm:inline font-medium">Appointment Details</span>
          </div>
          <div className="h-px w-12 bg-gray-300 self-center" />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold ${step >= 2 ? 'border-indigo-600 bg-indigo-100' : 'border-gray-300'}`}>
              2
            </div>
            <span className="hidden sm:inline font-medium">Patient Information</span>
          </div>
          <div className="h-px w-12 bg-gray-300 self-center" />
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold ${step >= 3 ? 'border-green-600 bg-green-100' : 'border-gray-300'}`}>
              3
            </div>
            <span className="hidden sm:inline font-medium">Confirmed</span>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 items-center gap-2">
                  <Calendar size={18} className="text-indigo-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={18} className="text-indigo-600" />
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, time }))}
                      className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${formData.time === time ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t flex justify-between items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <User size={18} className="text-indigo-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Mail size={18} className="text-indigo-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Phone size={18} className="text-indigo-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 300 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FileText size={18} className="text-indigo-600" />
                    Reason for Visit
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your symptoms or reason for consultation..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-8 border-t flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-3.5 rounded-xl font-semibold transition shadow-md flex items-center gap-2"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-12 px-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Appointment Confirmed!
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Your appointment with <strong>{doctor.name}</strong> has been successfully scheduled.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doctor:</span>
                    <span className="font-medium">{doctor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speciality:</span>
                    <span className="font-medium">{doctor.speciality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">
                      {formData.date || 'Selected date'} at {formData.time || 'Selected time'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient:</span>
                    <span className="font-medium">{formData.fullName}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>

              <button
                onClick={onClose}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};  


export default Booking;