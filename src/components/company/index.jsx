import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { regain, saleout } from '../../redux/actions/company';

class Company extends Component {
  render() {
    return (
      <div style={{ margin: '0 10px', padding: 10, border: '1px solid #ccc' }}>
        <h2>房产商</h2>
        <Card
          title='待出售房产'
          size='small'
          style={{ marginTop: 10, borderRadius: 8 }}
        >
          {this.props.company.map((item) => (
            <Card.Grid key={item.id} hoverable={false} style={{ width: '1/3' }}>
              {item.name}
            </Card.Grid>
          ))}
        </Card>
        <Card
          title='所有买家房产概况'
          size='small'
          style={{ marginTop: 10, borderRadius: 8 }}
        >
          <span>jerry拥有的房产数量：{this.props.jerryCount}</span>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => ({ company: state.company, jerryCount: state.jerry.length }),
  {
    regain,
    saleout,
  }
)(Company);
