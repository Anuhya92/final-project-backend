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
    <div style={{ padding: "20px" }}>
      <h1>About Us</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!aboutData && !error && <p>Loading...</p>}

      {aboutData && (
        <div>
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description}</p>
        </div>
      )}
    </div>
  );
};

export default About;
