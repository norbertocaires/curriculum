import React, { Component } from "react";
import { Layout } from 'antd';
import { UserSwitchOutlined, FlagOutlined, CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import information from './Informations';

class SectionInformation extends Component {
  render() {
    return (
      <Layout className="information" id="section-information">
        <div className="container">
          <h2>Informações</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <UserSwitchOutlined />
              <h3>{information.maritalStatus}</h3>
            </div>
            <div className="col-md-3">
              <FlagOutlined />
              <h3>{information.nationality}</h3>
            </div>
            <div className="col-md-3">
              <CalendarOutlined />
              <h3>{information.birth}</h3>
            </div>
            <div className="col-md-3">
              <HomeOutlined />
              <h3>{information.address}</h3>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SectionInformation;
