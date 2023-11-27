import React,{useEffect} from 'react';
import { motion,useAnimation } from 'framer-motion';
import './Modal_consent.css';



const Modal_consent = ({ open, onClose }) => {

    const closeBtnControls = useAnimation();
  useEffect(() => {
        closeBtnControls.start('jiggle');
      }, [closeBtnControls]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const closeBtnVariants = {
    rest: { scale: 2 },
    jiggle: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } },
  };

  if (!open) return null;

  return (
    <motion.div
      onClick={onClose}
      className='overlay'
      variants={overlayVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
        variants={modalVariants}
      >
        <div className='modalRight'>
          <motion.p className='closeBtn' onClick={onClose} variants={closeBtnVariants} whileHover='jiggle' animate={closeBtnControls}>
            X
          </motion.p>
          <div className='content'>
            <h1>Consent Alert</h1>
            <p>
              To continue enjoying our services, we kindly ask for your consent to process your personal data. Your privacy is of utmost importance to us, and we want to ensure that you are fully informed about how your information is handled.
            </p>
            <p>
              By providing your consent, simply click the "X" button below. Your action signifies your acknowledgment that you have read and understood our privacy policy.
            </p>
            <p>
              Thank you for entrusting us with your data. We look forward to continuing to provide you with exceptional service.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal_consent;
