import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Select } from 'antd';
import { buy, sale } from '../../redux/actions/jerry';
import { regain, saleout } from '../../redux/actions/company';

class Jerry extends Component {
  state = { buyValue: '', saleValue: '' };

  // handleBuyChange = (value) => {
  //   // const buyValue = this.props.estate.find((item) => item.id === value);
  //   console.log(buyValue);
  //   this.setState({ buyValue });
  // };

  handleSaleChange = (value) => {
    const saleValue = this.props.jerry.find((item) => item.id === value);
    console.log(saleValue);
    this.setState({ saleValue });
  };

  handleBuyClick = () => {
    const estateObj = this.props.estate.find(
      (item) => item.id === this.state.buyValue
    );
    this.props.buy(estateObj);
    this.props.saleout(estateObj);
    this.setState({ buyValue: '' });
  };

  handleSaleClick = () => {
    const estateObj = this.props.jerry.find(
      (item) => item.id === this.state.saleValue
    );
    this.props.sale(estateObj);
    this.props.regain(estateObj);
    this.setState({ saleValue: '' });
  };

  render() {
    return (
      <div style={{ margin: '0 10px', padding: 10, border: '1px solid #ccc' }}>
        <h2>买家Jerry</h2>
        <Card
          title='拥有房产'
          size='small'
          style={{ marginTop: 10, borderRadius: 8 }}
        >
          {this.props.jerry.length === 0 ? (
            <span>暂无房产</span>
          ) : (
            this.props.jerry.map((item) => (
              <span key={item.id} style={{ display: 'block' }}>
                {item.name}--售价：{item.price}
              </span>
            ))
          )}
        </Card>
        <div style={{ marginTop: 10 }}>
          <Select
            onChange={(value) => this.setState({ buyValue: value })}
            value={this.state.buyValue}
            style={{ width: 140 }}
          >
            {this.props.estate.length &&
              this.props.estate.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
          &nbsp;
          <Button
            type='primary'
            onClick={this.handleBuyClick}
            disabled={this.state.buyValue.trim() === ''}
          >
            购买
          </Button>
        </div>
        <div style={{ marginTop: 10 }}>
          <Select
            onChange={(value) => this.setState({ saleValue: value })}
            style={{ width: 140 }}
            value={this.state.saleValue}
            placeholder='+++++'
          >
            {this.props.jerry.length &&
              this.props.jerry.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
          &nbsp;
          <Button
            type='primary'
            onClick={this.handleSaleClick}
            disabled={this.state.saleValue.trim() === ''}
          >
            卖出
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ jerry: state.jerry, estate: state.company }),
  {
    buy,
    sale,
    regain,
    saleout,
  }
)(Jerry);
