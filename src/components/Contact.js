import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="Contact">
    <h2>Contact Us</h2>
    <p data-testid="paragraph">
      We're here to assist you with any questions, concerns, or inquiries you
      may have. At Clothing Heaven, we value your feedback and are committed to
      providing excellent customer service. Please don't hesitate to reach out
      to us through the following channels:
    </p>
    <h3>Customer Support Email:</h3>
    <p data-testid="paragraph">
      For general inquiries, product information, or assistance with your
      order, please contact our customer support team at [support@email.com].
      We strive to respond to all emails within 24 hours.
    </p>
    <h3>Phone Support:</h3>
    <p data-testid="paragraph">
      If you prefer to speak with a member of our team directly, you can reach
      us at [+91 9876543210]. Our customer support representatives are available
      during our business hours, 11:00 AM To 8:00 PM, to provide prompt
      assistance.
    </p>
    <h3>Visit Our Store:</h3>
    <p data-testid="paragraph">
      If you're in the [Rohini/Delhi] area or planning a visit, we'd love to
      welcome you to our physical store. Our address is [1/99, ABC, Rohini, Delhi], where
      you can explore our Clothing collections in person and receive
      personalized assistance from our friendly staff.
    </p>
  </div>
);

export default Contact;
