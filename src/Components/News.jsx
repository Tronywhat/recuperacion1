import React from "react";
import "/src/App.css";

export const News = () => {    return (
        <div>
            <section class="hero" id="news">
                <div class="hero-text">
                    <h1>Landing Page Template</h1>
                    <h2>LOREIPSUM TITLE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        dolore magna.</p>
                    <button>Next</button>
                </div>
                <div class="hero-video">
                    <div class="video-placeholder">
                        <span class="play-button">&#9658;</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
