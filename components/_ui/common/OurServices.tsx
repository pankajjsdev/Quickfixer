import React from 'react';
import { HeadingH1 } from './Heading';

const services = [
  {
    title: 'House Cleaning',
    description: 'Comprehensive cleaning services for your entire home.',
    icon: '🏠',
  },
  {
    title: 'Office Cleaning',
    description: 'Professional cleaning services for your workplace.',
    icon: '🏢',
  },
  {
    title: 'Window Cleaning',
    description: 'Expert window cleaning services to give you a clear view.',
    icon: '🪟',
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep cleaning for your carpets to remove dirt and stains.',
    icon: '🧼',
  },
  {
    title: 'Move In/Out Cleaning',
    description: 'Thorough cleaning services for moving in or out of your home.',
    icon: '🚚',
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Cleaning services for homes and offices after construction.',
    icon: '🏗️',
  },
  {
    title: 'Green Cleaning',
    description: 'Eco-friendly cleaning services using green products.',
    icon: '🌿',
  },
  {
    title: 'Upholstery Cleaning',
    description: 'Specialized cleaning services for your furniture and upholstery.',
    icon: '🛋️',
  },
  {
    title: 'Floor Cleaning',
    description: 'Professional floor cleaning services for all types of flooring.',
    icon: '🧹',
  },
  {
    title: 'Deep Cleaning',
    description: 'Intensive cleaning services for a thorough clean of your home.',
    icon: '🧽',
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HeadingH1 text='Our Services' />
          <p className="mt-4 text-gray-600">
            We offer a wide range of cleaning services to meet your needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
