import React from 'react';
import {
  Row,
  Col,
} from 'react-flexbox-grid';
import Checkbox from 'material-ui/Checkbox';

import Table from '../../Table';
import { IconRadiant, IconDire } from 'components/Icons';
import PlayerThumb from '../PlayerThumb';
import styles from './Vision.css';

const data = [
  {
    type: 'observer',
    image: <img height="24" src={`${API_HOST}/apps/dota2/images/items/ward_observer_lg.png`} role="presentation" />,
  },
  {
    type: 'sentry',
    image: <img height="24" src={`${API_HOST}/apps/dota2/images/items/ward_sentry_lg.png`} role="presentation" />,
  }
];

const handleCheckGenerator = (index, type) => event => {
  console.log(index, type, event.target.checked);
};

const handleCheckGeneratorTeam = index => event => {
  console.log(index, event.target.checked);
};

export default class VisionFilter extends React.PureComponent {
  columns(index) {
    return [
      {
        displayName: (
          <Checkbox defaultChecked={true} onCheck={handleCheckGeneratorTeam(index)} />
        ),
        displayFn: (row) => row.image
      },
      {
        displayName: (
          <PlayerThumb {...this.props.match.players[0 + index]} hideText={true}/>
        ),
        displayFn: (row) => (
          <Checkbox defaultChecked={true} onCheck={handleCheckGenerator(0 + index, row.type)} />
        )
      },
      {
        displayName: (
          <PlayerThumb {...this.props.match.players[1 + index]} hideText={true}/>
        ),
        displayFn: (row) => (
          <Checkbox defaultChecked={true} onCheck={handleCheckGenerator(1 + index, row.type)} />
        )
      },
      {
        displayName: (
          <PlayerThumb {...this.props.match.players[2 + index]} hideText={true}/>
        ),
        displayFn: (row) => (
          <Checkbox defaultChecked={true} onCheck={handleCheckGenerator(2 + index, row.type)} />
        )
      },
      {
        displayName: (
          <PlayerThumb {...this.props.match.players[3 + index]} hideText={true}/>
        ),
        displayFn: (row) => (
          <Checkbox defaultChecked={true} onCheck={handleCheckGenerator(3 + index, row.type)} />
        )
      },
      {
        displayName: (
          <PlayerThumb {...this.props.match.players[4 + index]} hideText={true}/>
        ),
        displayFn: (row) => (
          <Checkbox defaultChecked={true} onCheck={handleCheckGenerator(4 + index, row.type)} />
        )
      }
    ];
  }

  render() {
    return (
      <Row className={styles.visionFilter}>
        <Col xs={12} md={6}>
          <Table data={data} columns={this.columns(0)} />
        </Col>
        <Col xs={12} md={6}>
          <Table data={data} columns={this.columns(5)} />
        </Col>
      </Row>
    );
  }
}
