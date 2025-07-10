import React, { useEffect, useState } from "react";

function About() {
  const [fontSize, setFontSize] = useState(window.innerWidth < 768 ? "fs-6" : "fs-5");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "fs-6" : "fs-5");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="text-center pb-[35px]">
      <p className="fs-2 fw-bolder mb-2">About me</p>
      <div className="text-wrapper p-3 bg-[rgba(0,0,0,0.1)] text-black text-justify rounded">
        <p className={fontSize}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a third year vocational student at Universitas Gadjah Mada (UGM)
          and take software engineering technology as my major. I have an interest and passion in programming and I want
          to apply my skills on a particular project. I also have an interest in data science and machine
          learning. But, it doesn't mean I'm not interested in new things since I have a huge curiosity, specifically about
          software engineers and some computer stuff.
        </p>
      </div>
    </section>
  );
}

export default About;
