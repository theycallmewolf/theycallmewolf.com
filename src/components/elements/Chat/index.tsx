import { Field, Form, Formik } from 'formik';
import { useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

import { Wolf } from '../../../assets/icons';
import { IChat, ICross, ILoading } from '../../../assets/icons';
import { useTheme } from '../../../hooks/useTheme';
import { EmailData } from '../../../types';
import { Button } from '../Button';
import styles from './styles.module.scss';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('required'),
  email: Yup.string().email('invalid email').required('required'),
  message: Yup.string().required('required')
});

export function Chat(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { hasDarkMode } = useTheme();
  const recaptchaRef = useRef(null);

  const initialValues: FormValues = { name: '', email: '', message: '' };

  const toggleChat = useCallback(() => {
    setShowMessage(false);
    setEmailSent(false);
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleSubmit = useCallback(async ({ values, setSubmitting, resetForm }) => {
    const { name, email, message } = values;

    const token = await recaptchaRef.current.execute();

    if (!token) {
      setEmailSent(false);
      setShowMessage(true);
      return;
    }

    async function sendEmail(data: EmailData) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data)
        });
        setEmailSent(true);
        setShowMessage(true);
        setSubmitting(false);
        resetForm();
      } catch (error) {
        setEmailSent(false);
        setShowMessage(true);
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

        message:

        ${message}`,
      name
    });
  }, []);

  function onChange(value: string) {
    console.log('Captcha value:', value);
  }

  return (
    <>
      <div className={`${styles.container} ${isOpen ? styles.open : undefined}`}>
        <Button
          type="button"
          genre="fill"
          customClass="call-to-action"
          className={`${styles.button} ${isOpen ? styles.open : undefined}`}
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
                      <div className={`${styles.formItem} ${styles.textarea}`}>
                        <label htmlFor="message">message</label>
                        <Field as="textarea" id="message" name="message" />
                        {errors.message && <span className={styles.error}>{errors.message}</span>}
                      </div>
                      <div className={styles.buttonContainer}>
                        <Button
                          customClass={styles.resetBtn}
                          type="reset"
                          onClick={() => {
                            resetForm();
                            validateForm();
                          }}>
                          reset
                        </Button>
                        <Button
                          customClass={styles.submitBtn}
                          disabled={!isValid || isSubmitting}
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
              onChange={onChange}
            />
          </div>
          <div className={`${styles.message} ${showMessage ? styles.show : undefined}`}>
            <Wolf className={hasDarkMode ? styles.dark : undefined} />
            {emailSent ? (
              <>
                <h2>Wolf say thanks!</h2>
                <p>
                  Thank you for your message.
                  <br /> Looking forward to read it!
                </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
