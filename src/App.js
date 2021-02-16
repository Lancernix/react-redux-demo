import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Company from './components/company';
import Jerry from './components/jerry';
import store from './redux/store';
import { Row, Col } from 'antd';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Row>
          <Provider store={store}>
            <Col span={16}>
              <Company />
            </Col>
            <Col span={8}>
              <Jerry />
            </Col>
          </Provider>
        </Row>
      </div>
    );
  }
}
