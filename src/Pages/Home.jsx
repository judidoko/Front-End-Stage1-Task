import React from "react";
import { Container } from "react-bootstrap";
import profileImg from "../img/profile-pic.png";
import slackImg from "../img/logo1.JPG";
import { BiCamera } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import Footer from "../Componets/Footer";

const Home = () => {
  return (
    <>
      <Container>
        {/* Profile Section */}

        <div id="profile__section">
          <div id="profile">
            <img id="profile__img" src={profileImg} alt="My profile" />
            <div id="overlay">
              <div id="cam__content">
                <input style={{ display: "none" }} type="file" id="file" />
                <label id="cam" htmlFor="file">
                  <BiCamera style={{ color: "#F9FAFB", fontSize: "28px" }} />
                </label>
              </div>
            </div>
          </div>

          <h3 id="twitter">@judidoko</h3>
          <label style={{ display: "none" }}>Idoko Jude </label>
        </div>

        {/* Share Button Section */}

        <button id="share__button">
          <RiShareForwardLine style={{ fontSize: "20px", color: "#98A2B3" }} />
        </button>

        <button id="share__button-dots" style={{ display: "none" }}>
          <FiMoreHorizontal
            style={{
              fontSize: "20px",
              color: "#98A2B3",
            }}
          />
        </button>

        {/* Links Section */}

        <div id="link__section">
          <a id="btn__zuri" href="https://twitter.com/judidoko">
            Twitter Link
          </a>

          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>

          <a
            id="books"
            href="https://books.zuri.team"
            title="Find books about design and coding"
          >
            Zuri Books
            <h6>Find books about design and coding</h6>
          </a>

          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=idoko-jude"
          >
            Python Books
            <h6>Buy judidoko's Books on Pthon at discounted rate</h6>
          </a>

          <a id="pitch" href="https://background.zuri.team">
            Background Check for Coders
            <h6>To find out more information about your coders; Click Here</h6>
          </a>

          <a id="book__design" href="https://books.zuri.team/design-rules">
            Design Books
            <h6>Check out free design book offered by Zuri</h6>
          </a>
          <a id="contact" href="/Contact">
            Contact Me
          </a>
        </div>

        {/* Social icon */}
        <div id="social__icon">
          <a href="https://hngi9.zuriboard.com/dashboard">
            <img
              src={slackImg}
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <a href="https://github.com/judidoko">
            <GoMarkGithub style={{ fontSize: "30px", color: "#000000" }} />
          </a>
        </div>

        {/* Footer Section */}
        <Footer />
      </Container>
    </>
  );
};

export default Home;
