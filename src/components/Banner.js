import React, { Component } from "react";
import { Layout } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Link, animateScroll as scroll } from "react-scroll";
import programador from '../images/programador.svg';
import information from './Informations';

class SectionBanner extends Component {
  render() {
    return (
      <Layout className="banner" id="section-banner">
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-md-2">
              <img src={programador} className="avatar" alt="Programador" />
            </div>
            <div className="col-md-6 offset-md-1">
              <h1>{information.name}</h1>
              <p className="subtitle">{information.job}</p>
            </div>
          </div>
        </div>
        <Link
          className="btn btn-icon go-content"
          to="section-information"
          smooth={true}
        >
          <DoubleRightOutlined />
        </Link>
      </Layout>
    );
  }
}

export default SectionBanner;
