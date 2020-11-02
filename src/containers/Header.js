import React, { Component } from "react";
import { Layout } from 'antd';
import { LinkedinOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from "react-scroll";
import information from '../components/Informations';

const { Header } = Layout;

class SiteHeader extends Component {
  render() {
    return (
      <Header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand logo" href="/">Norberto Caires</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navBarNorbs"
            aria-controls="navBarNorbs"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <MenuOutlined />
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navBarNorbs">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="section-information"
                  smooth={true}
                >
                  Informações
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="section-graduation"
                  smooth={true}
                >
                  Acadêmico
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="section-experiences"
                  smooth={true}
                  offset={-100}
                >
                  Experiências
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="section-skill"
                  smooth={true}
                >
                  Habilidades
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="footer"
                  smooth={true}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <a
            href={information.linkedinUrl}
            className="btn btn-icon"
          >
            <LinkedinOutlined />
          </a>
        </nav>
      </Header>
    );
  }
}

export default SiteHeader;
