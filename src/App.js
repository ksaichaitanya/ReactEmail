import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_npxvyt7', 'template_7ku3h4w', form.current, {
        publicKey: 'DQi16U2OLsagP_II9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="text" name="user_phonenumber" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default App 