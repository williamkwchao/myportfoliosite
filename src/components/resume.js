import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/2ca5dac1-028a-45ce-a37d-0cb3a32416b0/42d6e58f-e57c-4ce1-a83a-cf2bf1a81f75_rw_600.png?h=e362530d8ed2903d9b418b5c7a0d1aa6"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ textAlign: "center" }}>William Chao</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #5FC3E4", width: "100%" }} />
            <p>
              Highly motivated computational biomedical engineering student at
              the University of Texas at Austin Cockrell School of Engineering
              seeking internship opportunities in software engineering, data
              science, and startups. Entrepreneurial at heart and a team player
              recognized for an impassioned approach and innovative ideas.
              Interested in leveraging design, data analytics, and software
              development to contribute to an organization's innovation and
              investment objectives, while gaining valuable industry experience.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #5FC3E4", width: "100%" }} />
            <h5>Address</h5>
            <p>2100 Rio Grande St, 78705</p>
            <h5>Phone</h5>
            <p>(918) 760-5063</p>
            <h5>Email</h5>
            <p>williamchao@utexas.edu</p>
            <h5>Web</h5>
            <p>kaizencreativestudio.com</p>
            <hr style={{ borderTop: "3px solid #5FC3E4", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2022}
              schoolName="The University of Texas at Austin"
              schoolDescription="Bachelor of Science - BS, Biomedical Engineering"
            />
            <hr style={{ borderTop: "3px solid #E55D87" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Product Management/Everything Intern - Simple Strips (YC W20)"
              jobDescription="Prepared and reviewed FDA protocols including clinical trial procedures and SMBG performance evaluations. 
              Conducted and recruited patients for clinical trials through surveys and outreach. 
              Administered mobile application testing (UI, compatibility, performance) with beta users and early adopters."
            />
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Campus Partner - Ground Up Ventures"
              jobDescription="Ground Up Ventures is an early stage venture capital firm investing in pre-seed and seed stage startups in the United States and Israel.
              Assisted with due diligence on prospective investments.
              Performed market research on various and industries and reported findings.
              Met with local startups and entrepreneurs to help source new potential investment opportunities."
            />
            <hr style={{ borderTop: "3px solid #E55D87" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
