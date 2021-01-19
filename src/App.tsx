import React, {Component, FocusEvent} from 'react';
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
import ReactContext from './Components/ReactContext/ReactContext'
import ReduxComponent from './Components/ReduxComponent/ReduxComponent';

type StateType = {
    value: number,
    clicked: boolean,
    news: Array<object>,
}

class App extends Component<{}, StateType> {
    state = {
        value: 0,
        clicked: false,
        news: [
            {title: 'Новость 1', content: 'Содержание новости 1'},
            {title: 'Новость 2', content: 'Содержание новости 1'},
            {title: 'Новость 3', content: 'Содержание новости 1'},
            {title: 'Новость 4', content: 'Содержание новости 1'},
            {title: 'Новость 5', content: 'Содержание новости 1'},
        ]
    }

  changeTitle = (index:number, e: React.FocusEvent<HTMLInputElement>) => {
      const news = [...this.state.news];
      news[index].title = e.target.value;
      this.setState({news});
      return
  };
  changeContent = (index:number, e:FocusEvent<HTMLTextAreaElement>) => {
      const news = [...this.state.news];
      news[index].content = e.target.value;
      this.setState({news});
      return
  };
  deleteNews = (index:number) => {
    const news = [...this.state.news];
    news.splice(index, 1);
    this.setState({news});
    return
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
                    <Route path='/reactcontext' render={() => {
                        return (
                            <ReactContext
                                changeClicked = {() => {this.setState({clicked: !this.state.clicked})}}
                                clickedValue = {this.state.clicked}
                            />
                        )
                    }}/>
                    <Route path = '/redux' render = {() => {
                        return (
                            <ReduxComponent />
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

export default App
