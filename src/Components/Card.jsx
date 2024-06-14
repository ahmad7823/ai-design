import React from 'react';
import blog01 from "../Images/blog01.png"
import blog02 from "../Images/blog02.png"
import blog03 from "../Images/blog03.png"
import blog04 from "../Images/blog04.png"
import blog05 from "../Images/blog05.png"

const Card = () => {
    return (
        <>
            <div className="main">
                <div className="container-cards">
                    <div className="card1">
                        <div className="blog01-image">
                            <img src={blog01} alt="blog01" />
                        </div>
                        <div className="text1">
                            <p>Sep 26,2021</p>
                            <br />
                            <p><b>GPT-3 and Open AI is the future. Let us explore how it is?</b></p>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="blog02-image">
                            <img src={blog02} alt="blog02" />
                        </div>
                        <div className="text2">
                            <p>Sep 26,2021</p>
                            <br />
                            <p><b>GPT-3 and Open AI is the future. Let us explore how it is?</b></p>
                        </div>
                    </div>


                    <div className="card3">
                        <div className="blog03-image">
                            <img src={blog03} alt="blog03" />
                        </div>
                        <div className="text3">
                            <p>Sep 26,2021</p>
                            <br />
                            <p><b>GPT-3 and Open AI is the future. Let us explore how it is?</b></p>
                        </div>
                    </div>


                    <div className="card4">
                        <div className="blog04-image">
                            <img src={blog04} alt="blog04" />
                        </div>
                        <div className="text4">
                            <p>Sep 26,2021</p>
                            <br />
                            <p><b>GPT-3 and Open AI is the future. Let us explore how it is?</b></p>
                        </div>
                    </div>


                    <div className="card5">
                        <div className="blog05-image">
                            <img src={blog05} alt="blog05" />
                        </div>
                        <div className="text5">
                            <p>Sep 26,2021</p>
                            <br />
                            <p><b>GPT-3 and Open AI is the future. Let us explore how it is?</b></p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Card;




