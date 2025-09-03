import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="webinar-container">
            {/* Header */}
            <header className="header">
                <h1 className="logo">🎥 TechTalks</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#register">Register</a>
                    <a href="#speakers">Speakers</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Join Our Live Webinar</h2>
                    <p>
                        <strong>Topic:</strong> Future of Artificial Intelligence <br />
                        <strong>Date:</strong> September 25, 2025 <br />
                        <strong>Time:</strong> 6:00 PM IST
                    </p>
                    <a href="#register" className="cta-btn">Register Now</a>
                </div>
                <div className="hero-img">
                    <img src="https://via.placeholder.com/350x250" alt="Webinar Banner" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h3>About the Webinar</h3>
                <p>
                    This live webinar will explore the latest advancements in Artificial
                    Intelligence, including real-world applications, future trends, and
                    ethical considerations. Perfect for students, developers, and
                    professionals.
                </p>
            </section>

            {/* Registration Form Section */}
            <section id="register" className="register">
                <h3>Register Now</h3>
                <form className="register-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="text" placeholder="Organization/Company" />
                    <button type="submit">Submit Registration</button>
                </form>
            </section>

            {/* Speakers Section */}
            <section id="speakers" className="speakers">
                <h3>Meet the Speakers</h3>
                <div className="speaker-list">
                    <div className="speaker-card">
                        <img src="https://via.placeholder.com/120" alt="Speaker 1" />
                        <h4>Dr. Anita Sharma</h4>
                        <p>AI Researcher, MIT</p>
                    </div>
                    <div className="speaker-card">
                        <img src="https://via.placeholder.com/120" alt="Speaker 2" />
                        <h4>Rajiv Mehta</h4>
                        <p>CTO, InnovateAI</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 TechTalks. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
