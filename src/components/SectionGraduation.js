import React, { Component } from "react";
import { Layout } from 'antd';
import information from './Informations';

class SectionGraduation extends Component {
  render() {
    return (
      <Layout className="graduation" id="section-graduation">
        <div className="container">
          <h2>Acadêmico</h2>
          <div 
            className="text-center" 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-bottom" 
            data-aos-duration="3000"
          >
            <img src={information.logoUniversity} alt={information.university} />
            <h3>{information.graduation}</h3>
            <p>{information.university}</p>
            <p>{information.graduationYear}</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SectionGraduation;
