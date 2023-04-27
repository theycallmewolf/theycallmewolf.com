import 'react-phone-number-input/style.css';

import { Wolf } from 'assets/icons';
import { IChat, ICross, ILoading } from 'assets/icons';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useTheme, useToast } from 'hooks';
import { E164Number } from 'libphonenumber-js/core';
import { useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { api } from 'services/api';
import { EmailData } from 'types';
import * as Yup from 'yup';

import { Button } from '../Button';
import styles from './contact-form.module.scss';

interface FormValues {
  name: string;
  email: string;
  message: string;
  // phone: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('required'),
  email: Yup.string().email('invalid email').required('required'),
  message: Yup.string().required('required')
  // phone: Yup.string().required('required')
  // .test('len', '9 digits', (val) => (val ? val.toString().length === 9 : false))
});

export const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [userName, setUserName] = useState('');
  const [sendErrorEmail, setSendErrorEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState<E164Number>();
  const [hasError, setHasError] = useState(false);
  const { hasDarkMode } = useTheme();
  const recaptchaRef = useRef(null);

  const { addToast } = useToast();

  const initialValues: FormValues = { name: '', email: '', message: '' };

  const toggleChat = useCallback(() => {
    setShowMessage(false);
    setEmailSent(false);
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleSubmit = useCallback(
    async ({ values, setSubmitting, resetForm }) => {
      const { name, email, message } = values;
      const token = await recaptchaRef.current.execute();

      setUserName(name);

      if (!token) {
        setEmailSent(false);
        setShowMessage(true);
        return;
      }

      async function sendSMS(message: string) {
        try {
          await axios.get('/api/sms', {
            params: {
              phone: phoneNumber,
              message
            }
          });
        } catch (error) {
          if (sendErrorEmail) {
            // sendEmail({
            //   email: 'bruno@theycallmewolf.com',
            //   subject: 'Issues with sendSMS()',
            //   message: `
            //   Hello Master.
            //   The sendSMS() feature failed after ${name} has filled the website contact form. He/She didn't received the thank you SMS.
            //   Here's the received error code: ${error}.
            //   Please take a look.
            //   `,
            //   name: 'Wolf'
            // });
            setSendErrorEmail(false);
          }
        }
      }

      async function sendEmail(data: EmailData) {
        try {
          await api.post('/api/contact', data, {
            headers: { 'content-type': 'application/json' }
          });
          resetForm();
          setPhoneNumber('');
          setShowMessage(true);
          setEmailSent(true);
          setSubmitting(false);

          sendSMS(
            `Hi ${name}! Thanks for your contact. You'll hear from me in a few days. Bruno @theycallmewolf`
          );
        } catch (error) {
          resetForm();
          setPhoneNumber('');
          setSubmitting(false);
          setEmailSent(false);
          setShowMessage(false);
          setIsOpen(false);
          addToast({
            type: 'error',
            title: 'I had issues sending your data',
            description: 'Please send me an email to bruno@theycallmewolf.com',
            duration: 8000
          });

          sendSMS(
            `Hi ${name}! Looks like I'm having issues with my contact form. Please reach me by email to bruno@theycallmewolf.com. Tks`
          );
        }
      }

      sendEmail({
        email,
        subject: `New contact from website.`,
        message: `
        Hey Wolf!
        You have a new contact from:

        name: ${name}

        email: ${email}

        phone: ${phoneNumber}

        message:

        ${message}`,
        name
      });
    },
    [addToast, sendErrorEmail, phoneNumber]
  );

  const handlePhoneInputChange = (value: E164Number) => {
    setPhoneNumber(value);
    setHasError(false);
    if (!isValidPhoneNumber(String(value))) {
      setHasError(true);
    }
  };

  function onRecaptchaChange(value: string) {
    return;
    console.log('Captcha value:', value);
  }

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
      <Button
        type="button"
        genre="fill"
        aria-label="contact form"
        className={`${styles.button} ${isOpen ? styles.open : ''}`}
        onClick={() => toggleChat()}>
        {isOpen ? <ICross /> : <IChat />}
      </Button>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>
            Say <br /> &quot;hello, wolf!&quot;
          </h2>
          <p>
            More about me and my work?
            <br /> Just drop a message.
          </p>
        </div>
        <Formik
          validationSchema={schema}
          validateOnMount
          validateOnBlur
          validateOnChange
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) =>
            handleSubmit({ values, setSubmitting, resetForm })
          }>
          {({ errors, resetForm, isSubmitting, isValid, validateForm }) => {
            return (
              <Form>
                {!isSubmitting ? (
                  <>
                    <div className={styles.formItem}>
                      <label htmlFor="name">name</label>
                      <Field type="text" id="name" name="name" />
                      {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div className={styles.formItem}>
                      <label htmlFor="email">email</label>
                      <Field type="email" id="email" name="email" />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                    <div className={styles.formItem}>
                      <label htmlFor="phone">phone</label>
                      <PhoneInput
                        defaultCountry="PT"
                        value={phoneNumber}
                        onChange={handlePhoneInputChange}
                        id="phone"
                        name="phone"
                      />
                      {hasError && <span className={styles.error}>Check number</span>}
                    </div>
                    <div className={`${styles.formItem} ${styles.textarea}`}>
                      <label htmlFor="message">message</label>
                      <Field as="textarea" id="message" name="message" />
                      {errors.message && <span className={styles.error}>{errors.message}</span>}
                    </div>
                    <div className={styles.buttonContainer}>
                      <Button
                        className={styles.resetBtn}
                        type="reset"
                        onClick={() => {
                          resetForm();
                          validateForm();
                        }}>
                        reset
                      </Button>
                      <Button
                        className={styles.submitBtn}
                        disabled={!isValid || isSubmitting || hasError}
                        type="submit">
                        send
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className={styles.submitting}>
                    <ILoading />
                    <span>please wait...</span>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
        <div className={styles.recaptchaContainer}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onRecaptchaChange}
          />
        </div>
        <div className={`${styles.message} ${showMessage ? styles.show : ''}`}>
          <Wolf className={hasDarkMode ? styles.dark : undefined} />
          {emailSent ? (
            <>
              <h2>
                thank you <br /> {userName}!
              </h2>
              <p>Looking forward to read your message and get in touch with to you!</p>
            </>
          ) : (
            <>
              <h2>Hmm...</h2>
              <p>
                A problem sending your email? This is not a good impression, I know... Please send
                me an email to{' '}
                <a
                  href="mailto:bruno@theycallmewolf.com?subject=I've%20visited%20your%20website%20Bruno!&body=Hi%20Bruno%2C%0D%0A..."
                  target="_blank"
                  rel="noopener noreferrer">
                  bruno@theycallmewolf.com
                </a>
              </p>
            </>
          )}
          <Button genre="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <div className="alert alert-info" style={{ display: 'none' }}></div>
        </div>
      </div>
    </div>
  );
};
