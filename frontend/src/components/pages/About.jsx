import React from 'react'
import '../../App.css'
import '../About.css'

function About() {
    return (
        <div className='body-info'>
            <div className='about-box'>
                <div className='about-container'>
                    <h1 className='about-title'>about</h1>
                    <p className='about-paragraph'>
                        <b>Purpose</b>: matching perfect couple by using Ai to analyze their profile data and preferences<br />
                        <b>Problem</b>: for people who struggle to find meaningful connections and potential partners<br />
                        <b>Improve</b>: we will improve the matching system of the app<br />
                        <b>Vision</b>: users will trust our platform to find their perfect match and continue using our app to nurture and sustain their relationships.
                    </p>
                </div>
            </div>
            <div className='about-box'>
                <div className='about-container'>
                    <h1 className='about-title'>members</h1>
                    <p className='about-paragraph'>
                        - Kun Kerdthaisong 6410685074<br />
                        - Kittisak Suddaen 6410685082<br />
                        - Prin Yimrungruang 6410685199<br />
                        - Thanakorn Praimanee 6410685157<br />
                        - Suwijak Tantamaroj 6410685256
                    </p>
                </div>
            </div>
            <div className='about-box'>
                <div className='about-container'>
                    <h1 className='about-title'>github repos</h1>
                    <p className='about-paragraph'>
                        <a href='https://github.com/cn331-hogwarts/cn331_web_new'> web repo</a>
                        <br />
                        <a href='https://github.com/cn331-hogwarts/cn331_web_ai'> ai repo</a>
                        <br />
                        <a href='https://github.com/cn331-hogwarts/cn331_updates'> updates repo</a>
                        <br />
                        <a href='https://github.com/cn331-hogwarts'> project repo</a>
                    </p>
                </div>
            </div>
            <div className='about-box'>
                <div className='about-container'>
                    <h1 className='about-title'>tracker</h1>
                    <p className='about-paragraph'>
                        <a href='https://www.pivotaltracker.com/projects/2681787'> pivotaltracker link</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;