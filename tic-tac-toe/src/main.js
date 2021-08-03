import Broad from './board';
import React from 'react';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div >
                <div >
                    <Broad />
                    <center>
                        <button
                            style={{ height: '50px', width: '100px', marginTop: '32px' }}
                        >
                            Restart Game
                        </button>
                    </center>
                </div>
            </div >
        )
    }
}


export default Main;