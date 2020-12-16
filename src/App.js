import React, {Component} from 'react';
import './App.css';
import './components/form/form';
import Table from "./components/table/table";
import Form from "./components/form/form";
import News from "./components/news/news";
import Footer from "./components/footer/footer";

class App extends Component{
  state = {
    news: [
      {
        title: 'Новость 1',
        content: 'Содержание новости 123',
      },
      {
        title: 'Новость 2',
        content: 'Содержание новости 234',
      },
      {
        title: 'Новость 2',
        content: 'Содержание новости 345',
      },
    ],
    title: 'Personal',
  };
  openForm = () => {
    const changeTitleForm = document.querySelector('.changeNewsTitle');
    changeTitleForm.style.display = 'block';
  };
  changeNews1Title = () => {
    const changeTitleForm = document.querySelector('.changeNewsTitle');
    const newsTitleNew = document.querySelector('.changeTitleNew').value;
    this.setState(state => {
      if(newsTitleNew !== '') {
        return state.news[0].title = newsTitleNew;
      } else {
        return state.news[0].title = this.state.news[0].title;
      }
    });
    changeTitleForm.style.display = 'none';
  }
  changeNews2Title = () => {
    this.setState(state => {
      return state.news[1].title = 'News 2';
    })
  };
  changeNews3Title = () => {
    this.setState(state => {
      return state.news[2].title = 'News 3';
    })
  };
  changeTitle = () => {
      this.setState((state) => {
        if(state.title === 'Personal') {
          return {
            title: 'Персональная информация',
          }
        } else {
          return {
            title: 'Personal',
          }
        }
    })
  };
  render() {
    return (
        <React.Fragment>
          <div className="wrapper">
            <div className="block-left">
              <div className="block-left_title">
                <div className="containerTabs">
                  <h1 onClick={this.changeTitle} className='wrapper-title'>{this.state.title}</h1>
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
                <News
                    name={this.state.news[0].title}
                    content={this.state.news[0].content}
                    onChangeNewsTitle = {this.openForm}
                />
                <div className="changeNewsTitle">
                  <div className="changeNewsTitle-content">
                    <input type="text" className='changeTitleNew'/>
                    <button onClick={this.changeNews1Title} className='changeTitle'>Изменить</button>
                  </div>
                </div>
                <News
                    name={this.state.news[1].title}
                    content={this.state.news[1].content}
                    onChangeNewsTitle = {this.changeNews2Title}
                />
                <News
                    name={this.state.news[2].title}
                    content={this.state.news[2].content}
                    onChangeNewsTitle = {this.changeNews3Title}
                />
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
}

export default App;
