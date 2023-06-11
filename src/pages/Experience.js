import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sree Venkateshwarar matric Hr.Sec School,TamilNadu,Chennai
          </h3>
          <p> Completed SSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
          Sree Venkateshwarar matric Hr.Sec School,TamilNadu,Chennai
          </h3>
          <p>Completed HSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
          RamaKrishna Mission Vivekananda College,TamilNadu,Chennai
          </h3>
          <p>Completed B.com(Information System Management)</p><br />
          <p><b>Activities:</b></p>
          <ul>
            <li>Presentation's via Zoom</li>
            <li>Active participation's in Rotary club</li>
          </ul>   
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Certification:</h3>
    <ul>
    <h4 className="vertical-timeline-element-subtitle">Dayanand college of commerce</h4>
    <p>
      Completed Certification in MS word and MS powerpoint which help me how to present a data in oral as well as Technology wise.
    </p>
    </ul>
  </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
          MEASI Institute of Information Technology,TamilNadu,Chennai
          </h3>
          <p>Persuing MCA</p>
          <p><b>Activities:</b></p>
          <ul>
            <li>Presented a PPT on one of the Goal's in SDG(Sustainable Development Goal) with a role of TL</li>
            <li>Participated in Intra-collegiate Tech meet for Debugging and Quiz</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Certification:</h3>
    <ul>
    <h4 className="vertical-timeline-element-subtitle">Complete MERN stack web developer</h4>
    <p>
      Able to grasp full picture about MERN stack web Development with hands on project's
    </p>
    </ul>
  </VerticalTimelineElement>
  
        <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
      </VerticalTimeline>
    </div>
  );
}

export default Experience;