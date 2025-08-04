import React from 'react';

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const passenger = form.passenger.value;
    const vehicle = form.vehicle.value;
    const end = form.end.value;
    const journeyDate = form.journeyDate.value;
    const returnDate = form.returnDate.value;

    const message = `New Booking Inquiry

---------------------------
• Name: ${name}
• Phone: ${phone}
• Passengers: ${passenger}
• Vehicle Type: ${vehicle}
• To: ${end}
• Journey Date: ${journeyDate}
• Return Date : ${returnDate}
---------------------------`;

    const whatsappNumber = '918108807171';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section style={{ backgroundColor: '#3b2c2cff', color: '#fff', padding: '50px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <h4 style={{ color: '#F16621', fontWeight: 'bold', letterSpacing: 1 }} className='text-center'>
          ONLINE BOOKING
        </h4>
        <h1 style={{ fontSize: '36px', marginBottom: '30px', fontWeight: 'bold' }} className='text-center'>
          Confirm your booking now!
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          <div>
            <label style={labelStyle}>Your Name</label>
            <input type="text" name="name" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Phone</label>
            <input type="text" name="phone" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Number of Passenger</label>
            <input type="number" name="passenger" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Type of Vehicle</label>
            <select name="vehicle" style={inputStyle} required defaultValue="">
              <option value="" disabled>Select Type of Vehicle</option>
              <option value="Sedan">Sedan</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="Innova Cab">Innova Cab</option>
              <option value="Ertiga">Ertiga</option>
              <option value="Kia Carens">Kia Carens</option>
              <option value="Tata Winger">Tata Winger</option>
              <option value="Tempo Traveller 9 Seater">Tempo Traveller 9 Seater</option>
              <option value="Tempo Traveller 13 Seater">Tempo Traveller 13 Seater</option>
              <option value="Tempo Traveller 17 Seater">Tempo Traveller 17 Seater</option>
              <option value="Other">Other</option>
          
            </select>
          </div>

          <div>
            <label style={labelStyle}>End Destination</label>
            <input type="text" name="end" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Journey Date</label>
            <input type="date" name="journeyDate" style={inputStyle} required />
          </div>

          <div>
            <label style={labelStyle}>Return Date</label>
            <input type="date" name="returnDate" style={inputStyle} required />
          </div>

          <div style={{ gridColumn: '1/-1', marginTop: '30px' }} className='text-center'>
            <button type="submit" style={buttonStyle}>
              Book via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  fontSize: '15px',
  border: '1px solid #444',
  borderRadius: '4px',
  backgroundColor: '#F16621',
  color: '#fff',
  outline: 'none',
};

const labelStyle = {
  color: '#ccc',
  fontSize: '14px',
  marginBottom: '5px',
  display: 'block',
};

const buttonStyle = {
  backgroundColor: '#F16621',
  color: '#fff',
  padding: '15px 30px',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  boxShadow: '0 4px 10px rgba(25, 109, 171, 0.4)',
};

export default BookingForm;
