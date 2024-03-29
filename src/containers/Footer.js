import React, { Component } from "react";
import { Layout } from 'antd';
import { VerticalAlignTopOutlined, PrinterOutlined } from '@ant-design/icons';
import { Link } from "react-scroll";
import triangle from '../images/bg_triangulos.svg';
import information from '../components/Informations';

const { Footer } = Layout;

class SiteFooter extends Component {
  render() {
    return (
      <>
        <div className="actions">
          <Link
            to="section-banner"
            className="btn btn-icon back-top"
            smooth={true}
          >
            <VerticalAlignTopOutlined />
          </Link>
          <a
            href={information.curriculumUrl}
            className="btn btn-icon"
          >
            <PrinterOutlined />
          </a>
        </div>

        <Footer id="footer">
          <div className="container">
            <h2>Contato</h2>
            <div className="content row no-gutters align-items-center justify-content-center">
              <div className="col-auto" data-aos="zoom-in-up">
                <img src={triangle} className="App-logo" alt="logo" />
              </div>
              <div className="col-auto contact">
                <small>E-mail</small>
                <a href={`mailto:${information.mail}`} data-aos="fade-right">{information.mail}</a>
                <small>Telefone</small>
                <a href={`tel:${information.phone}`} data-aos="fade-left">{information.phone}</a>
              </div>
            </div>
            <p className="subfooter">Todos os direitos reservados</p>
          </div>

        </Footer>
      </>
    );
  }
}

export default SiteFooter;
