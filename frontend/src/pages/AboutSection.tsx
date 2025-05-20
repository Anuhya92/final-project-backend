import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const { section } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then(setData);
  }, []); 

  const found = data?.sections?.find((s: any) =>
    s.link.toLowerCase().includes(section?.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{found?.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{found?.content}</p>
    </div>
  );
};

export default AboutSection;
