import React from 'react';

const Testimonials = () => {
  return (
    <div class="containers">
        <div className='testimonial-heading'>
            <h3>TESTIMONIALS</h3>
            <p>See What Our User Says</p>
        </div>

        <div className="testimonials">
        <div class="card">
        <div class="layer"></div>
        <div class="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="image">
                    <img src="./img/darshan-patel-QJEVpydulGs-unsplash.jpg" alt="" height="100%" width="80%" />
                </div>
                <div className="details">
                    <h2>Darshan patel<br/><span>Website Designer</span></h2>
                </div>
        </div>
    </div>
    <div className="card">
        <div className="layer"></div>
        <div className="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="image">
                    <img src="./img/juan-encalada-WC7KIHo13Fc-unsplash.jpg" alt="" height="100%" width="80%" />
                </div>
                <div className="details">
                    <h2>Juan encalada<br/><span>Website Designer</span></h2>
                </div>
        </div>
    </div>
    <div className="card">
        <div className="layer"></div>
        <div className="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="image">
                    <img src="./img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="" height="90%" width="100%" />
                </div>
                <div className="details">
                    <h2>Christopher<br/><span>Website Designer</span></h2>
                </div>
        </div>
    </div>
</div>
</div>


  )
}

export default Testimonials;