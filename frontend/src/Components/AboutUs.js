import React,{Fragment,useState } from 'react'
import "../styles/about.css";

    const AboutUs = () => {
        const[ toggleTab,setToggle] = useState(1)
        const toggleState=(index) =>{
            setToggle(index)
        }
    return (
        <Fragment>
            <section className="about">
                <div className="row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">

                            <div className={toggleTab ===1 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(1)}>
                                <h2>About CareShare</h2>
                            </div>

                            <div className={toggleTab ===2 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(2)}
                            >
                                <h2>Skills</h2>
                            </div>

                            <div className={toggleTab ===3 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(3)}
                            >
                                <h2>About teachers</h2>
                            </div>

                            <div className="tab-content">

                                {/* About Content */}

                                <div className={toggleTab=== 1? "content active-content": "content"}>
                                    <h2> Our Story</h2>
                                    <p>The CareShare group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                    <h4> We are a TYBSC Computer Science Students created <b>CareShare.</b></h4>
                                    <p>The CareShare group is a circle of courage friends who have taken thr initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                </div>

                                {/* skill content*/}

                                <div className={toggleTab=== 2? "content active-content": "content"}>
                                    <h2> Skills Used</h2>
                                    <p>The CareShare group is a circle of courage friends who have taken thr initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Mongodb</h3>
                                                <div className="progress">
                                                    <div className="progress-bar Developer">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Express JS</h3>
                                                <div className="progress">
                                                    <div className="progress-bar Designer">
                                                        <span>90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>React JS</h3>
                                                <div className="progress">
                                                    <div className="progress-bar JavaScript">
                                                        <span>85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Node Js</h3>
                                                <div className="progress">
                                                    <div className="progress-bar PhotoShop">
                                                        <span>88%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Experience Content */}

                                <div className={toggleTab=== 3? "content active-content": "content"}>
                                    <div className="exp-column">
                                        <h3>Ma'am shubha Kamat</h3>
                                        <span>Head Of Department</span>
                                        <p>The CareShare group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Sir Nilesh Natekar</h3>
                                        <span>Project Guide</span>
                                        <p>The CareShare group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Sir Amar Naik</h3>
                                        <span>Assistance Professor</span>
                                        <p>The CareShare group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Mam Ruchi Fulari</h3>
                                        <span>Assistance Professor</span>
                                        <p>The CareShare group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for donation related social causes. It aims to join the NGO's with the donors so that sharing 
                                    and donating becomes easier and reaches as many needy people it can.</p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        
 )
}
export default AboutUs
