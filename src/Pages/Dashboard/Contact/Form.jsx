import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const FormContact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9fnekv9', 'template_zmz464m', form.current, {
        publicKey: 'YNwQ22XYp177OmgAt',
      })
      .then(
        () => {
          setAlertMessage(
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium">¡Mensaje de aviso!</span> Su Mensaje se envío correctamente.
            </div>
          );
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <h4 className='text-sm sm:text-xl lg:text-2xl font-semibold'>Contacto</h4>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type='email' id="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type='tel' id="phone" name="user_phone" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Su Mensaje</label>
            <textarea name="message" id="textarea" rows="10" cols="50" required />
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
        {alertMessage}
      </div>

      <style>
        {`
          .form-container {
            width: 400px;
            background: linear-gradient(145deg, #2c2c2c, #1a1a1a) padding-box,
                        linear-gradient(145deg, #6e00ff, #00bcd4) border-box;
            border: 2px solid transparent;
            padding: 32px 24px;
            font-size: 14px;
            font-family: inherit;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-sizing: border-box;
            border-radius: 16px;
          }

          .form-container button:active {
            scale: 0.95;
          }

          .form-container .form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-container .form-group {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .form-container .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #b0b0b0;
            font-weight: 600;
            font-size: 12px;
          }

          .form-container .form-group input {
            width: 100%;
            padding: 12px 16px;
            border-radius: 8px;
            color: #fff;
            font-family: inherit;
            background-color: #333;
            border: 1px solid #444;
          }

          .form-container .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            border-radius: 8px;
            resize: none;
            color: #fff;
            height: 96px;
            border: 1px solid #444;
            background-color: #333;
            font-family: inherit;
          }

          .form-container .form-group input::placeholder {
            opacity: 0.7;
          }

          .form-container .form-group input:focus,
          .form-container .form-group textarea:focus {
            outline: none;
            border-color: #6e00ff;
          }

          .form-container .form-submit-btn {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            align-self: flex-end;
            font-family: inherit;
            color: #717171;
            font-weight: 600;
            width: 40%;
            background: #444;
            border: 1px solid #555;
            padding: 12px 16px;
            font-size: inherit;
            gap: 8px;
            margin-top: 8px;
            cursor: pointer;
            border-radius: 6px;
          }

          .form-container .form-submit-btn:hover {
            background-color: #555;
            border-color: #666;
            color:white
          }

          .form-inline {
            display: flex;
            gap: 20px;
          }

          .form-inline .form-group {
            flex: 1;
          }
        `}
      </style>
    </>
  );
}
