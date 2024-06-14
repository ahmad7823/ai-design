import React from 'react';
import Ai from "../Images/ai.png"

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container-flex">
                    <div className="left-content">
                        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
                        <br />
                        <div className="ai">
                            <p>
                                ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text based on the input it receives. It is used for various applications such as answering questions, generating content, and engaging in conversations.</p>
                        </div>
                        <br />
                        <input type="text" className="style-input" placeholder="Your Email Address" />
                        <button className="get-started">Get Started</button>
                    </div>
                    <div className="right-image">
                        <img src={Ai} alt="Ai" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
