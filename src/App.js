import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import News from './Components/News/News';
import ExampleList from './Components/ExampleList/ExampleList';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import ElevenIterationClass from './Components/ElevenIteration/ElevenIterationClass';
import ElevenIterationFunc from './Components/ElevenIteration/ElevenIterationFunc';
import TenIteration from "./Components/TenIteration/TenIteration";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
          {title: 'Новость 1', content: 'Содержание новости 1'},
          {title: 'Новость 2', content: 'Содержание новости 1'},
          {title: 'Новость 3', content: 'Содержание новости 1'},
          {title: 'Новость 4', content: 'Содержание новости 1'},
          {title: 'Новость 5', content: 'Содержание новости 1'},
      ]
    }
  }

  changeTitle = (index, e) => {
      const news = [...this.state.news];
      news[index].title = e.target.value;
      this.setState({news});
  };
  changeContent = (index, e) => {
      const news = [...this.state.news];
      news[index].content = e.target.value;
      this.setState({news});
  };
  deleteNews = (index) => {
    const news = [...this.state.news];
    news.splice(index, 1);
    this.setState({news});
  };
  render() {
    return(
        <React.Fragment>
          <Header/>
          <div className='wrapper'>
              <Switch>
                  <Route exact path='/' render={Main}/>
                  <Route path='/news' render={() => {
                      return (
                          this.state.news.map((newsItem, index) => {
                              return(
                                  <ErrorBoundary key = {index}>
                                      <News
                                          name = {newsItem.title}
                                          content = {newsItem.content}
                                          changeTitle = {this.changeTitle.bind(this, index)}
                                          changeContent = {this.changeContent.bind(this, index)}
                                          onDeleteNews = {this.deleteNews.bind(this, index)}
                                      />
                                  </ErrorBoundary>
                              )
                          })
                      )
                  }}/>
                  <Route path='/list' render={ExampleList}/>
                  <Route path='/teniteration' render={() => {
                      return (
                          <TenIteration/>
                      )
                  }}/>
                  <Route path='/eleveniterationclass' render={() => {
                      return (
                          <ElevenIterationClass />
                      )
                  }}/>
                  <Route path='/eleveniterationfunc' render={() => {
                      return (
                          <ElevenIterationFunc />
                      )
                  }}/>
                  <Route render={() => <h1>404 Page Not Found</h1>}/>
              </Switch>
          </div>
          <Footer/>
        </React.Fragment>
    )
  }
}

export default App;
