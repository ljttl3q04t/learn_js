import { React, useState } from 'react';

import { Row, Col, message } from 'antd';
import { CloseOutlined, UpCircleOutlined } from '@ant-design/icons';
import CircleOutlined from './component/Antd/CustomIcon/CircleOutlined';

import './App.css';

const App = () => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [x_win_count, setXWinCount] = useState(0);
  const [o_win_count, setOWinCount] = useState(0);
  const resetGame = () => {
    setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  return (
    <center>
      <div className="Game">
        <Row justify="center" className="Row-container">
          <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }}>
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <UpCircleOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <CircleOutlined style={{ fontSize: "500%" }} />
          </Col>
        </Row>

        <Row justify="center" className="Row-container">
          <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }}>
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
        </Row>

        <Row justify="center" className="Row-container" style={{ borderBottomStyle: "none" }}>
          <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }}>
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
          <Col span={8} className="Col-container">
            <CloseOutlined style={{ fontSize: "500%" }} />
          </Col>
        </Row>
        <br /><br />
        <Row justify="center" className="Row-container" style={{ borderBottomStyle: "none" }}>
          <Col span={8}>PLAYER 1 (X) </Col>
          <Col span={4}> TIE </Col>
          <Col span={8}>PLAYER 2 (X) </Col>
          <Col span={4}> MODE </Col>
        </Row>

      </div>
    </center>
  );
};


export default App;