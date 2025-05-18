import React from 'react';
import perelman from '/perelman.png';
import pennMedicine from '/penn-medicine.png';
import harvardMed from '/harvard-medicine.png';

const Footer: React.FC = () => {
  return (
    <div className="footer items-center">
      <a
        href="https://www.pennmedicine.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={pennMedicine}
          alt="Penn Medicine"
          className="h-12 w-auto object-contain"
          style={{ height: '75px' }}
        />
      </a>
      <a
        href="https://www.med.upenn.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={perelman}
          alt="Penn"
          className="h-12 w-auto object-contain"
          style={{ height: '72px' }}
        />
      </a>
      <a
        href="https://hms.harvard.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={harvardMed}
          alt="Harvard Medical School"
          className="h-12 w-auto object-contain"
          style={{ height: '80px' }}
        />
      </a>
    </div>
  );
};

export default Footer;
