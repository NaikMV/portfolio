import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Particles from 'react-particles-js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Testimonials from './Components/Testimonials';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>

        <Particles
            params={{
               "particles": {
                  "number": {
                     "value": 200,
                     "density": {
                        "enable": true,
                        "value_area": 1803.4120608655228
                     }
                  },
                  "color": {
                     "value": "#ffffff"
                  },
                  "shape": {
                     "type": "circle",
                     "stroke": {
                        "width": 1,
                        "color": "#ffffff"
                     },
                     "polygon": {
                        "nb_sides": 4
                     },
                     "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                     }
                  },
                  "opacity": {
                     "value": 0.4008530152163807,
                     "random": false,
                     "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                     }
                  },
                  "size": {
                     "value": 1.5,
                     "random": true,
                     "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                     }
                  },
                  "line_linked": {
                     "enable": true,
                     "distance": 0,
                     "color": "#ffffff",
                     "opacity": 0.3687847739990702,
                     "width": 0.6413648243462091
                  },
                  "move": {
                     "enable": true,
                     "speed": 6,
                     "direction": "none",
                     "random": false,
                     "straight": false,
                     "out_mode": "out",
                     "bounce": false,
                     "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                     }
                  }
               },
               "interactivity": {
                  "detect_on": "window",
                  "events": {
                     "onhover": {
                        "enable": true,
                        "mode": "repulse"
                     },
                     "onclick": {
                        "enable": false,
                        "mode": "bubble"
                     },
                     "onresize": {
                        enable: true,
                        density_auto: true,
                        density_area: 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                      },
                     "resize": true
                  },
                  "modes": {
                     "grab": {
                        "distance": 400,
                        "line_linked": {
                           "opacity": 1
                        }
                     },
                     "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                     },
                     "repulse": {
                        "distance": 100,
                        "duration": 0.4
                     },
                     "push": {
                        "particles_nb": 4
                     },
                     "remove": {
                        "particles_nb": 2
                     }
                  }
               },
               //"retina_detect": true
            }} className="homeBGColor" width={window.innerWidth-20} height={window.innerHeight} />

        <About data={this.state.resumeData.main} />
        <Experience data={this.state.resumeData.resume} />
        <Education data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
