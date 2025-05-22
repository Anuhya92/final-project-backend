import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutSection = () => {
  const [data, setData] = useState<any>(null);
  const { section } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const selected = data?.sections?.find((s: any) => s.link === `/about/${section}`);

  if (!selected) {
    return <div style={{ padding: "2rem" }}>Section not found</div>;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ color: "#FACC15", fontSize: "1.5rem" }}>{selected.title}</h1>
      <p style={{ whiteSpace: "pre-line", color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}>
  {selected.content}
</p>

    </div>
  );
};

export default AboutSection;
