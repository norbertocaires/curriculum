import React, { Component } from "react";
import { Layout, Timeline } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import information from './Informations';

class SectionExperiences extends Component {
  render() {
    // Convertendo os dados para o novo formato do Timeline
    const timelineItems = information.experiences.map((item, k) => ({
      color: 'blue',
      dot: <AimOutlined />,
      label: (
        <img
          src={item.logo}
          alt={item.company}
          data-aos={k % 2 ? "fade-left" : "fade-right"}
        />
      ),
      children: (
        <div data-aos={k % 2 ? "fade-right" : "fade-left"}>
          <h5>{item.period}</h5>
          <h4>{item.job}</h4>
          <p className="text_small">{item.activities}</p>
        </div>
      ),
    }));

    return (
      <Layout className="experiences" id="section-experiences">
        <div className="container">
          <h2>Experiências Profissionais</h2>
          <Timeline mode="alternate" items={timelineItems} />
        </div>
      </Layout>
    );
  }
}

export default SectionExperiences;
