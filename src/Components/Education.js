import React, { Component } from 'react';

class Education extends Component {
    render() {

        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                </div>
            })
        }

        return (
            <section id="education">

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>
                    </div>
                </div>
                <div className="row skillsMobileHide">
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/js.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/react.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/csharp.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/python.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/node.jpg" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/sql.jpg" alt="skills" />
                    </div>
                </div>
                <div className="row skillsMobileHide">
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/aws.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/git.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/vs.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/boot.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/css.png" alt="skills" />
                    </div>
                    <div className="two columns">
                        <img className="skillsImage" src="../images/skills/html.png" alt="skills" />
                    </div>
                </div>

                <div className="row mobileviewOnly">
                    <img className="skillsMobileImage" src="../images/skills/js.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/react.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/csharp.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/python.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/node.jpg" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/sql.jpg" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/aws.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/git.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/vs.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/boot.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/css.png" alt="skills" />
                    <img className="skillsMobileImage" src="../images/skills/html.png" alt="skills" />
                </div>
            </section>
        );
    }
}

export default Education;
