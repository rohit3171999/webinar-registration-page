import React from "react";

export default function App() {
    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>
                    Never Miss a Detail with AI-Powered Meeting Summaries
                </h1>
                <p style={styles.heroSubtitle}>
                    Get instant, accurate, and organized summaries of every meeting.
                </p>
                <button style={styles.cta}>Try It Now</button>
                <img
                    src="https://via.placeholder.com/600x300"
                    alt="AI Meeting Summary Demo"
                    style={styles.heroImage}
                />
            </section>

            {/* Feature Section */}
            <section style={styles.features}>
                <h2 style={styles.sectionTitle}>Why Use Real-Time AI Summaries?</h2>
                <div style={styles.featureList}>
                    <div style={styles.featureBox}>
                        <h3>⏳ Save Time</h3>
                        <p>Skip note-taking, focus on discussions.</p>
                    </div>
                    <div style={styles.featureBox}>
                        <h3>🤝 Improve Collaboration</h3>
                        <p>Share summaries instantly with your team.</p>
                    </div>
                    <div style={styles.featureBox}>
                        <h3>📑 Accurate Records</h3>
                        <p>Always have a reliable meeting log.</p>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section style={styles.demo}>
                <h2 style={styles.sectionTitle}>See It in Action</h2>
                <video style={styles.video} controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support video.
                </video>
                <div style={styles.sampleBox}>
                    <h3>Sample Summary</h3>
                    <p>
                        ✅ Project deadlines confirmed
                        ✅ Next sprint starts Monday
                        ✅ Client feedback integrated
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section style={styles.testimonials}>
                <h2 style={styles.sectionTitle}>What Teams Say</h2>
                <blockquote style={styles.quote}>
                    “Perfect for remote teams — we save hours every week.” – Beta User
                </blockquote>
                <blockquote style={styles.quote}>
                    “Finally, no one forgets action items after calls.” – Early Adopter
                </blockquote>
            </section>

            {/* CTA Section */}
            <section style={styles.ctaSection}>
                <h2 style={styles.sectionTitle}>Ready to Get Started?</h2>
                <button style={styles.cta}>Start Free Trial</button>
                <button style={styles.ctaOutline}>Upgrade Plan</button>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>© 2025 CollabSuite | <a href="#">Privacy</a> | <a href="#">Terms</a></p>
            </footer>
        </div>
    );
}

const styles = {
    page: { fontFamily: "Arial, sans-serif", lineHeight: "1.6", margin: 0 },
    hero: { textAlign: "center", padding: "50px 20px", background: "#f5faff" },
    heroTitle: { fontSize: "2.5rem", color: "#222" },
    heroSubtitle: { fontSize: "1.2rem", color: "#555", margin: "10px 0" },
    cta: {
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 24px",
        margin: "20px 10px",
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
    },
    ctaOutline: {
        background: "#fff",
        color: "#007bff",
        border: "2px solid #007bff",
        padding: "12px 24px",
        margin: "10px",
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
    },
    heroImage: { marginTop: "20px", maxWidth: "100%", borderRadius: "10px" },
    sectionTitle: { textAlign: "center", fontSize: "2rem", margin: "40px 0 20px" },
    features: { padding: "40px 20px", background: "#fff" },
    featureList: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
    featureBox: {
        flex: "1 1 250px",
        background: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    demo: { textAlign: "center", padding: "40px 20px", background: "#f5faff" },
    video: { width: "80%", maxWidth: "600px", borderRadius: "10px" },
    sampleBox: {
        marginTop: "20px",
        display: "inline-block",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
        textAlign: "left",
    },
    testimonials: { padding: "40px 20px", background: "#fff" },
    quote: {
        fontStyle: "italic",
        margin: "20px auto",
        maxWidth: "600px",
        textAlign: "center",
        color: "#444",
    },
    ctaSection: { textAlign: "center", padding: "40px 20px", background: "#f5faff" },
    footer: {
        textAlign: "center",
        padding: "20px",
        background: "#222",
        color: "#fff",
        fontSize: "0.9rem",
    },
};
