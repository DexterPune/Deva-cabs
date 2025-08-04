import React, { useState, useEffect } from 'react';

const Visionn = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionStyle = {
    padding: isMobile ? '0px' : '40px',
    backgroundColor: '#f8f9fa',
    margin: '0 auto',
  };

  const containerStyle = {
    maxWidth: isMobile ? '100%' : '1200px',
    margin: '0 auto',
    padding: '0 15px',
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: '20px',
  };

  const colStyle = {
    flex: '1',
    minWidth: isMobile ? '100%' : '300px',
    boxSizing: 'border-box',
    marginBottom: isMobile ? '20px' : '0',
  };

  const headingStyle = {
    textAlign: 'center',
    paddingBottom: '20px',
    fontSize: isMobile ? '24px' : '32px',
    color: '#343a40',
  };

  const visionContentStyle = {
    backgroundColor: '#562018',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: 'white',
  };

  const sectionTitleStyle = {
    color: '#F8911B',
  };

  const sectionTitleStylee = {
    color: 'white',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={{ ...headingStyle, ...sectionTitleStyle }}>
          About Our Vision & Mission
        </h3>
        <div style={rowStyle}>
          <div style={colStyle}>
            <div style={visionContentStyle}>
              <h4 style={sectionTitleStylee}>Vision</h4>
              <p className="text-white">
                At Deva Cabs, our vision is to become a leading name in safe and reliable road travel, offering unmatched comfort, professionalism, and accessibility. We aim to connect people to their destinations with efficiency and care, making every ride a pleasant and dependable experience. By focusing on technology, customer service, and continuous improvement, we envision setting new standards in modern cab services across the region. 🚕🌟
              </p>
            </div>
          </div>
          <div style={colStyle}>
            <div style={visionContentStyle}>
              <h4 style={sectionTitleStylee}>Mission</h4>
              <p className="text-white">
                Our mission at Deva Cabs is to deliver prompt, affordable, and comfortable transportation to every customer. We are dedicated to providing clean vehicles, courteous drivers, and a smooth booking experience that ensures stress-free travel. Whether it's daily commuting, airport transfers, or spiritual journeys, Deva Cabs is committed to safety, transparency, and customer satisfaction every step of the way. 🚕✅
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visionn;
