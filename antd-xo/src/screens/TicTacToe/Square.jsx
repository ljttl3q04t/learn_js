import React from 'react';
import { PLAYER_X } from './consts';
import CircleOutlined from '../../component/Antd/CustomIcon/CircleOutlined';
import { CloseOutlined } from '@ant-design/icons';

const style = { fontSize: "500%" };

const Square = ({ player }) => {
    if (!player) {
        return <div></div>;
    }
    return player === PLAYER_X ? <CloseOutlined style={style} /> : <CircleOutlined style={style} />
}

export default Square;
