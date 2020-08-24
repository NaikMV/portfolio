import React from 'react';
function Header(props) {

   if (props.data) {
      var name = props.data.name;
      var networks = props.data.social.map(function (network) {
         return <li key={network.name}><a href={network.url} target="blank"><i className={network.className}></i></a></li>
      })
   }
   return (
      <div id="home">
         <div style={{height: "100%", width: "100%", float: "none", top: "40%", textAlign: "center", position: "absolute" }}>
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Work Experience</a></li>
                  <li><a className="smoothscroll" href="#education">Education & Skills</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Recommendations</a></li>
                  <li><a className="smoothscroll" href="#about">Contact</a></li>
               </ul>

            </nav>
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Hi, I'm {name}.</h1>
                  <h3>I'm a NYC based <span>software engineer</span> currently seeking a full-time software development role in the United States.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </div>
      </div>
   );
}

export default Header;
