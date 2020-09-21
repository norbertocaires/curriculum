import React, { Component } from "react";
import { Layout } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navBarNorbs">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section-information">Informações</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-graduation">Acadêmico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-experiences">Experiências</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-skill">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contato</a>
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
