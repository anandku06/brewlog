import React from "react";

const Layout = (props) => {
  const { children } = props;
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">BrewLog</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up for Free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
  <footer>
    <p><span className="text-gradient">BrewLog</span> was made by <a href="https://www.linkedin.com/in/anand-kumar-023231291">Anand</a> using the <a href="http://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library.</p>
  </footer>
);
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
