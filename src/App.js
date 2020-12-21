import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import DataProvider from './Components/DataProvider/DataProvider';
import Posts from './Components/Posts/Posts';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import News from './Components/News/News';
import ExampleList from './Components/ExampleList/ExampleList';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsUrl: 'https://jsonplaceholder.typicode.com/todos',
    }
  }

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
                              <DataProvider
                                url = {this.state.newsUrl}
                                renderContent = {(data) => <Posts posts = {data} />}
                              />
                              // this.state.news.map((newsItem, index) => {
                              //   return(
                              //       <ErrorBoundary key = {index}>
                              //         <News
                              //             name = {newsItem.title}
                              //             content = {newsItem.content}
                              //             onDeleteNews = {this.deleteNews.bind(this, index)}
                              //         />
                              //       </ErrorBoundary>
                              //       )
                              // })
                          )
                  }}/>
                  <Route path='/list' render={ExampleList}/>
                  <Route render={() => <h1>404 Page Not Found</h1>}/>
              </Switch>
          </div>
          <Footer/>
        </React.Fragment>
    )
  }
}

export default App;
