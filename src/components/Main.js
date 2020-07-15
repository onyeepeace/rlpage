import React, {useState} from 'react';
import hero from '../hero.svg';
import { Link, useHistory } from 'react-router-dom';

const Main = () => {

    const [joined, setJoined] = useState('');
    const history = useHistory();

    const join = (e) => {
        e.preventDefault();
        if (joined != '') {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date);
        }
    }

    return (
        <React.Fragment>
            <header>
                <img src={hero} /* style={{width:'100%'}} */ alt="hero-img"/>
                <div>
                    <h1>We build &amp; design <br/> web applications.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quos adipisci ullam et dolorum, tenetur laborum dicta ea illo fuga.</p>
                    <Link to='/contact'>Get in touch</Link>
                </div>
            </header>

            <main>
                <section className="services">
                    <h2>Why we should work together?</h2>
                    <div className="service-container">
                        <div className="service-card service-one"></div>
                        <div className="service-description">
                            <h3>SEO Friendly Apps.</h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non dicta veniam corrupti quas id quam eveniet quod illum consequatur ea ullam autem ratione placeat incidunt, officia eos, ducimus molestias aperiam iste quo saepe? Fuga dolorem perferendis, similique, dignissimos possimus sunt omnis molestias aspernatur quam nostrum placeat repellendus explicabo ullam.</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-card service-two"></div>
                        <div className="service-description">
                            <h3>Clear &amp; Optimized Code.</h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non dicta veniam corrupti quas id quam eveniet quod illum consequatur ea ullam autem ratione placeat incidunt, officia eos, ducimus molestias aperiam iste quo saepe? Fuga dolorem perferendis, similique, dignissimos possimus sunt omnis molestias aspernatur quam nostrum placeat repellendus explicabo ullam.</div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non dicta veniam corrupti quas id quam eveniet quod illum consequatur ea ullam autem ratione placeat incidunt, officia eos, ducimus molestias aperiam iste quo saepe? Fuga dolorem perferendis, similique, dignissimos possimus sunt omnis molestias aspernatur quam nostrum placeat repellendus explicabo ullam.</div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>
                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit" value="Join Now!"/>
                    </form>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Main;