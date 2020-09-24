import React, { Component } from "react";
import { Layout, Timeline } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import information from './Informations';

class SectionExperiences extends Component {
  render() {
    return (
      <Layout className="experiences" id="section-experiences">
        <div className="container">
          <h2>Experiências Profissionais</h2>
          <Timeline mode="alternate">
            {information.experiences.map(item => (
              <Timeline.Item
                label={<img src={item.logo} alt={item.company} />}
                dot={<AimOutlined />}
              >
                <h5>{item.period}</h5>
                <h4>{item.job}</h4>
                <p className="text_small">{item.activities}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </Layout>
    );
  }
}

export default SectionExperiences;
