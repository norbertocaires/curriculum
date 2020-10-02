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
            {information.experiences.map((item, k) => (
              <Timeline.Item
                label={
                  <img
                    src={item.logo}
                    alt={item.company}
                    data-aos={k % 2 ? "fade-left" : "fade-right"}
                  />
                }
                dot={<AimOutlined />}
              >
                <div data-aos={k % 2 ? "fade-right" : "fade-left"}>
                  <h5>{item.period} - {k}</h5>
                  <h4>{item.job}</h4>
                  <p className="text_small">{item.activities}</p>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </Layout>
    );
  }
}

export default SectionExperiences;
