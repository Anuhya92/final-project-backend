import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data?.heading || "About Us"}</h1>
      {data?.sections?.map((s: any) => (
        <div key={s.link} style={{ marginTop: "1rem" }}>
          <h3>
            <Link to={`/about${s.link}`}>{s.title}</Link>
          </h3>
          <p>{s.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
