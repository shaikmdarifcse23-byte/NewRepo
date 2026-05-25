import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Page.module.css'
import { fadeInUp, staggerSection } from '../utils/animationVariants'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function validateForm(values) {
  const errors = {}
  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters long.'
  }
  return errors
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }

    if (success) {
      setSuccess(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validateForm(formData)

    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      setSuccess(false)
      return
    }

    setErrors({})
    setSuccess(true)
    setFormData(initialForm)
  }

  return (
    <motion.section
      id="contact"
      className={styles.pageSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerSection}
    >
      <motion.div className={styles.card} variants={fadeInUp}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p className={styles.sectionText}>
          Send a message directly from your portfolio. Use the form below for a clean, modern contact experience.
        </p>
      </motion.div>

      <div className={styles.contactGrid}>
        <motion.form className={styles.contactForm} variants={fadeInUp} onSubmit={handleSubmit} noValidate>
          {success && <div className={styles.successBanner}>Your message was sent successfully.</div>}

          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.fieldLabel}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={styles.textInput}
              placeholder="Your name"
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.fieldLabel}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.textInput}
              placeholder="your@email.com"
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.fieldLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={styles.textArea}
              placeholder="Tell me about your project or question"
            />
            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </motion.form>

        <motion.div className={styles.contactInfo} variants={fadeInUp}>
          <div className={styles.contactItem}>
            <h2 className={styles.cardTitle}>Email</h2>
            <p className={styles.cardBody}>
              <a className={styles.contactLink} href="mailto:hello@yourdomain.com">
                hello@yourdomain.com
              </a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <h2 className={styles.cardTitle}>GitHub</h2>
            <p className={styles.cardBody}>
              <a className={styles.contactLink} href="https://github.com/your-username" target="_blank" rel="noreferrer">
                github.com/your-username
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
