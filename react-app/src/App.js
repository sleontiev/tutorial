import React from 'react';
import './App.css';
import './components/form';
import Form from "./components/form";
import Table from './components/table';
import News from './components/news';
import Footer from './components/footer/footer';

function App() {
  return (
      <React.Fragment>
      <div className="wrapper">
        <div className="block-left">
          <div className="block-left_title">
            <div className="containerTabs">
              <h1 className='wrapper-title'>Personal</h1>
              <div className="container__table">
                <Table/>
              </div>
            </div>
          </div>
          <div className="table-more-popup">
            <div className="table-more-popup-content">
              <div className="close-table">
                <img src="img/close.png" alt="Close"/>
              </div>
              <Table/>
            </div>
          </div>
          <div className="block-left_news">
            <News name='Новость 1' content='Содержание новости 1'/>
            <News name='Новость 2' content='Содержание новости 2'/>
            <News name='Новость 3' content='Содержание новости 3'/>
          </div>
          <div className="block-left_main">
            <Form/>
          </div>
        </div>
        <div className="block-right">
          <div className="container__list containerTabs">
            <div className="ul-list">
              <h2 className="error"> </h2>
              <h3>Упорядоченный список</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.JS</li>
              </ul>
            </div>
            <div className="ol-list">
              <h3>Неупорядоченный список</h3>
              <ol>
                <li>Angular</li>
                <li>Vue.JS</li>
                <li>React.JS</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </React.Fragment>
  )
}

export default App;
