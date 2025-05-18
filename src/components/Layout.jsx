import React, { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";

const Layout = (props) => {
  const { children } = props;
  const [showModal, setShowModal] = useState(false);

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">BrewLog</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button onClick={() => setShowModal(true)}>
        <p>Sign up for Free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">BrewLog</span> was made by{" "}
        <a href="https://www.linkedin.com/in/anand-kumar-023231291">Anand</a>{" "}
        using the{" "}
        <a href="http://www.fantacss.smoljames.com" target="_blank">
          FantaCSS
        </a>{" "}
        design library. <br />
        Check Out this project on{" "}
        <a
          href="https://github.com/anandku06/brewlog"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={() => setShowModal(false)}>
          <Authentication />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
