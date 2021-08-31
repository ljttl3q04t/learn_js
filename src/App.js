import React from 'react';
import './App.css';
import AsideList from './components/AsideList';
import MessageContainer from './components/MessageContainer';
import TopAvt from './components/TopAvt';

class App extends React.Component {
    render() {
        return (
            <div id='container'>
                <AsideList />
                <main>
                    <TopAvt />
		            <MessageContainer />
	            </main>
            </div>
        )
    }
}

export default App;