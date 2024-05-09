import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // console.log(e)
    e.preventDefault(); 
     // forms tagi submittimine teeb lehele by default refreshi
     // e.preventDefault takistab refreshi tegemist

    emailjs
      .sendForm('service_nwprmvb', 'template_vune57h', form.current, {
        publicKey: '3dfkIdZSYlUN4BrmA',
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
      <label>Nimi</label><br />
      <input type="text" name="from_name" /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Sõnum</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" />
    </form>
  );
};