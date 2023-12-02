import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';
import '../About.css';
import Footer from '../Footer';

function About() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6 } },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <div className='slide-wrapper'>
          <motion.div className='body-info' initial='hidden' animate='visible' variants={containerVariants}>
            <motion.div className='about-box' variants={boxVariants}>
              <motion.div className='about-container'>
                <motion.h1 className='about-title' variants={titleVariants}>About</motion.h1>
                <motion.p className='about-paragraph' variants={paragraphVariants}>
                  <b>Purpose</b>: matching perfect couples by using AI to analyze their profile data and preferences<br />
                  <b>Problem</b>: for people who struggle to find meaningful connections and potential partners<br />
                  <b>Improve</b>: we will improve the matching system of the app<br />
                  <b>Vision</b>: users will trust our platform to find their perfect match and continue using our app to nurture and sustain their relationships.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className='slide-wrapper'>
          <motion.div className='body-info' initial='hidden' animate='visible' variants={containerVariants}>
            <motion.div className='about-box' variants={boxVariants}>
              <motion.div className='about-container'>
                <motion.h1 className='about-title' variants={titleVariants}>Members</motion.h1>
                <motion.p className='about-paragraph' variants={paragraphVariants}>
                  - Kun Kerdthaisong 6410685074<br />
                  - Kittisak Suddaen 6410685082<br />
                  - Prin Yimrungruang 6410685199<br />
                  - Thanakorn Praimanee 6410685157<br />
                  - Suwijak Tantamaroj 6410685256
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className='slide-wrapper'>
          <motion.div className='body-info' initial='hidden' animate='visible' variants={containerVariants}>
            <motion.div className='about-box' variants={boxVariants}>
              <motion.div className='about-container'>
                <motion.h1 className='about-title' variants={titleVariants}>Github repos</motion.h1>
                <motion.p className='about-paragraph' variants={paragraphVariants}>
                  <a href='https://github.com/cn331-hogwarts/cn331_web_new'> web repo</a>
                  <br />
                  <a href='https://github.com/cn331-hogwarts/cn331_web_ai'> ai repo</a>
                  <br />
                  <a href='https://github.com/cn331-hogwarts/cn331_updates'> updates repo</a>
                  <br />
                  <a href='https://github.com/cn331-hogwarts'> project repo</a>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className='slide-wrapper'>
          <motion.div className='body-info' initial='hidden' animate='visible' variants={containerVariants}>
            <motion.div className='about-box' variants={boxVariants}>
              <motion.div className='about-container'>
                <motion.h1 className='about-title' variants={titleVariants}>Tracker</motion.h1>
                <motion.p className='about-paragraph' variants={paragraphVariants}>
                  <a href='https://www.pivotaltracker.com/projects/2681787'> pivotaltracker link</a>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Slider>

      <Footer />
    </>
  );
}

export default About;