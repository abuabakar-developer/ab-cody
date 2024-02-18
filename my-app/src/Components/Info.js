import React from 'react';
import './InfoStyles.css';
import ab from "../Components/ab.jpg";

const Info = () => {
    return (
        <div className='container'>
            <div className='image-container'>
                <img className='profile-image' src={ab} alt='Abu Bakar' />
            </div>
            <div className='info-container'>
                <h2>Hi, I'm <span>Abu Bakar, Developer</span></h2>
                <div className='details'>
                    <div className='detail'>
                        <h3>First Name</h3>
                        <p>Abu Bakar</p>
                    </div>
                    <div className='detail'>
                        <h3>Last Name</h3>
                        <p>Developer</p>
                    </div>
                    <div className='detail'>
                        <h3>Age</h3>
                        <p>22</p>
                    </div>
                    <div className='detail'>
                        <h3>Nationality</h3>
                        <p>Pakistan</p>
                    </div>
                    <div className='detail'>
                        <h3>Language</h3>
                        <p>English, Urdu</p>
                    </div>
                    <div className='detail'>
                        <h3>Address</h3>
                        <p>40 More Jaranwala, Pakistan</p>
                    </div>
                    <div className='detail'>
                        <h3>Availability</h3>
                        <p>Freelance and job both.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;

