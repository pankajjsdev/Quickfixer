'use client'
// components/MultiStepForm.tsx
import { useState } from 'react';
// utils/zipCodes.ts
export const validZipCodes = ['12345', '67890']; // Example zip codes

export const isZipCodeValid = (zipCode: string) => {
  return validZipCodes.includes(zipCode);
};


export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [zipError, setZipError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    serviceType: '',
    additionalInfo: '',
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    images: [] as File[],
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    images: '',
  });

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isZipCodeValid(zipCode)) {
      setFormData({ ...formData, zip: zipCode });
      setStep(2);
    } else {
      setZipError('Sorry, we do not currently service your area.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagesArray: File[] = Array.from(files);
      setFormData({ ...formData, images: [...formData.images, ...imagesArray] });
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // Handle final form submission
      console.log('Form Data:', formData);
    }
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate step 1 fields
    if (step === 1) {
      if (!zipCode) {
        setZipError('Zip Code is required');
        valid = false;
      }
    }

    // Validate step 2 fields
    if (step === 2) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
        valid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      }
      if (!formData.serviceType) {
        newErrors.serviceType = 'Service type is required';
        valid = false;
      }
    }

    // Validate step 3 fields
    if (step === 3) {
      if (!formData.address) {
        newErrors.address = 'Address is required';
        valid = false;
      }
      if (!formData.city) {
        newErrors.city = 'City is required';
        valid = false;
      }
      if (!formData.state) {
        newErrors.state = 'State is required';
        valid = false;
      }
      if (!formData.preferredDate) {
        newErrors.preferredDate = 'Preferred Date is required';
        valid = false;
      }
      if (!formData.preferredTime) {
        newErrors.preferredTime = 'Preferred Time is required';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {step === 1 && (
        <form onSubmit={handleZipCodeSubmit}>
          <h2 className="text-2xl font-bold mb-6">Enter Your Zip Code</h2>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            {zipError && <p className="text-red-500 text-sm mt-1">{zipError}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Check</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNextStep}>
          <h2 className="text-2xl font-bold mb-6">Basic Details</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="serviceType" className="block text-gray-700 font-bold mb-2">Service Type</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.serviceType ? 'border-red-500' : ''}`}
              required
            >
              <option value="">Select a service</option>
              <option value="standardCleaning">Standard Cleaning</option>
              <option value="deepCleaning">Deep Cleaning</option>
              <option value="moveInOutCleaning">Move In/Out Cleaning</option>
              <option value="carpetCleaning">Carpet Cleaning</option>
              <option value="windowCleaning">Window Cleaning</option>
              <option value="other">Other</option>
            </select>
            {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Upload Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              accept="image/*"
              className="mb-2"
            />
            <div>
              {formData.images.map((image, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index + 1}`}
                    className="h-16 w-16 object-cover rounded-lg mr-2"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                    className="text-red-500 font-bold"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Next</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Address and Schedule</h2>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.address ? 'border-red-500' : ''}`}
              required
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.city ? 'border-red-500' : ''}`}
              required
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.state ? 'border-red-500' : ''}`}
              required
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="preferredDate" className="block text-gray-700 font-bold mb-2">Preferred Date</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.preferredDate ? 'border-red-500' : ''}`}
              required
            />
            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="preferredTime" className="block text-gray-700 font-bold mb-2">Preferred Time</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.preferredTime ? 'border-red-500' : ''}`}
              required
            >
              <option value="">Select a time slot</option>
              <option value="08:00-10:00">08:00 AM - 10:00 AM</option>
              <option value="10:00-12:00">10:00 AM - 12:00 PM</option>
              <option value="12:00-14:00">12:00 PM - 02:00 PM</option>
              <option value="14:00-16:00">02:00 PM - 04:00 PM</option>
              <option value="16:00-18:00">04:00 PM - 06:00 PM</option>
            </select>
            {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      )}
    </div>
  );
}
