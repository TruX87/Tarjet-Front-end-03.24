import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      {/* <label>Name</label><br />
      <input type="text" name="from_name" /><br /> */}
      <TextField id="outlined-basic" label="Name" variant="outlined" name="from_name" /><br /><br />
      <TextField id="outlined-basic" label="Email" variant="outlined" name="from_email" /><br /><br />
      <TextField id="outlined-basic" label="Message" variant="outlined" name="from_message" /><br /><br />
      <Button variant="contained" type="submit" value="Send">Send</Button>
      {/* <label>Email</label><br />
      <input type="email" name="from_email" /><br /> */}
      {/* <label>Message</label><br />
      <textarea name="message" /><br /> */}
      {/* <input type="submit" value="Send" /> */}
    </form>
  );
};