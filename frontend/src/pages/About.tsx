import { useEffect, useState } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState<any | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setAboutData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Could not load about info");
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        About Us
      </h1>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {!aboutData && !error && <p style={{ textAlign: "center" }}>Loading...</p>}

      {aboutData && (
        <div style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{aboutData.title}</h2>
          <p style={{ whiteSpace: "pre-line", fontSize: "16px", }}>{aboutData.description}</p>
        </div>
      )}
    </div>
  );
};

export default About;
