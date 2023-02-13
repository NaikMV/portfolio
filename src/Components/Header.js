import React from 'react';
function Header(props) {

   var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
   };

   TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
         this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
         this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
         delta = this.period;
         this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
         this.isDeleting = false;
         this.loopNum++;
         delta = 500;
      }

      setTimeout(function () {
         that.tick();
      }, delta);
   };

   window.onload = function () {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i = 0; i < elements.length; i++) {
         var toRotate = elements[i].getAttribute('data-rotate');
         var period = elements[i].getAttribute('data-period');
         if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
         }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
   };

   if (props.data) {
      var networks = props.data.social.map(function (network) {
         return <li key={network.name}><a href={network.url} target="blank"><i className={network.className}></i></a></li>
      })
   }
   return (
      <div id="home">
         <div style={{ height: "100%", width: "100%", float: "none", top: "25%", textAlign: "center", position: "absolute" }}>
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
                  <h1 className="responsive-headline">Hi, I'm <span
                  class="txt-rotate"
                  data-period="2000"
                  data-rotate='[ "Manan Naik.", "Coder..!" ]'></span></h1>
                  <h3>I'm a New Jersey based <span>software engineer</span> currently seeking a full-time software development role in the United States.</h3>
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
