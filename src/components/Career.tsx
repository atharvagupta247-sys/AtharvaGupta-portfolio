import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started Journey</h4>
                <h5>Programming Fundamentals</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started Computer Science studies and learned Python programming fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Frontend Skills</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Learned Web Development including HTML, CSS, JavaScript and React.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Game Developer</h4>
                <h5>Aspiring Developer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learning Game Development and exploring other technologies and software development fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
