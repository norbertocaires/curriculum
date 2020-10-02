import React, { Component } from "react";
import { Layout } from 'antd';
import information from './Informations';

class SectionSkill extends Component {
  render() {
    return (
      <Layout className="skill" id="section-skill">
        <div className="container">
          <h2>Habilidades e conhecimento</h2>
          <ul className="list-unstyled" data-aos="zoom-out">
            {information.skill.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default SectionSkill;
