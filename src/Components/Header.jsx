
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <div className="header-logo">
                        <h1>GPT-3</h1>
                    </div>
                    <div className="menu">
                        {/* <a href="#home">Home</a>
                        <a href="#chatgpt">What is Chat Gpt?</a>
                        <a href="#openai">Open AI</a>
                        <a href="#casestudies">Case Studies</a>
                        <a href="#library">Library</a> */}
                        <Link to="/Home">Home</Link>
                        <Link to="/chatgpt">What is Chat Gpt?</Link>
                        <Link to="/openai">Open AI</Link>
                        <Link to="/casestudies">Case Studies</Link>
                        <Link to="/library">Library</Link>
                    </div>
                    <button className="sign-in">Sign in</button>
                    <button className="sign-up">Sign up</button>
                </nav>
            </div>
        </div>
    );
}

export default Header;

