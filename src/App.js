import "./App.css";
import "./App.css";
import { Container } from "react-bootstrap";
import profileImg from "./img/profile-pic.png";
import logo from "./img/intern.png";
import { BiCamera } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { FiSlack } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";

function App() {
  return (
    <>
      <Container>
        <div className="app">
          {/* Profile Section */}

          <div className="profileSection">
            <div className="profile">
              <img className="profile_img" src={profileImg} alt="My profile" />
              <div className="overlay">
                <div className="content">
                  <input style={{ display: "none" }} type="file" id="file" />
                  <label className="cam" htmlFor="file">
                    <BiCamera style={{ color: "#F9FAFB", fontSize: "28px" }} />
                  </label>
                </div>
              </div>
            </div>

            <h3 className="twitter">@judidoko</h3>
            <label style={{ display: "none" }}>Idoko Jude </label>
          </div>

          {/* Share Button Section */}

          <button className="shareButton">
            <RiShareForwardLine
              style={{ fontSize: "20px", color: "#98A2B3" }}
            />
          </button>

          <button className="shareButtonDots" style={{ display: "none" }}>
            <FiMoreHorizontal
              style={{
                fontSize: "20px",
                color: "#98A2B3",
              }}
            />
          </button>

          {/* Links Section */}

          <div className="linkSection">
            <a className="btn__zuri" href="https://twitter.com/judidoko">
              Twitter Link
            </a>
          </div>
          <div className="linkSection">
            <a className="btn__zuri" href="https://training.zuri.team/">
              Zuri Team
            </a>
          </div>
          <div className="linkSection">
            <a className="books" href="http://books.zuri.team">
              Zuri Books
            </a>
          </div>
          <div className="linkSection">
            <a
              className="book__python"
              href="https://books.zuri.team/python-for-beginners?ref_id=idoko-jude"
            >
              Python Books
            </a>
          </div>
          <div className="linkSection">
            <a className="pitch" href="https://background.zuri.team">
              Background Check for Coders
            </a>
          </div>
          <div className="linkSection">
            <a
              className="book__design"
              href="https://books.zuri.team/design-rules"
            >
              Design Books
            </a>
          </div>

          {/* Social icon */}
          <div className="social_icon">
            <a href="https://hngi9.zuriboard.com/dashboard">
              <FiSlack style={{ fontSize: "30px", color: "#36C5F0" }} />
            </a>
            <a href="https://github.com/judidoko">
              <GoMarkGithub style={{ fontSize: "30px", color: "#000000" }} />
            </a>
          </div>

          {/* Footer Section */}
          <footer>
            <div className="flex_container">
              <h2>
                Zuri <label></label> Intenship
              </h2>
            </div>
            <div className="flex_container">
              <h6>HNG Internship 9 Frontend Task</h6>
            </div>
            <div className="flex_container">
              <img src={logo} alt="" />
            </div>
          </footer>
        </div>
      </Container>
    </>
  );
}

export default App;
