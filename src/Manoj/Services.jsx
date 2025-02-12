import React from 'react';
import './Servies.scss';
import { FaLaptopCode, FaDatabase, FaPlug, FaMobileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaLaptopCode />, title: "UI Designing", description: "I can design web pages as per customer requests." },
  { icon: <FaDatabase />, title: "MySQL Database", description: "Managing databases and developing new ones." },
  { icon: <FaPlug />, title: "JDBC Connectivity", description: "Managing databases using JDBC in Advanced Java." },
  { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Using Android tools to develop mobile applications." }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="icon">{service.icon}</div>
            <h2 className="head">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
