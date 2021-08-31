import React from 'react';
import './MessageContainer.css';
import { ChatFeed, Message } from 'react-chat-ui'

class MessageContainer extends React.Component {
	state = {
		messages: [
			new Message({id: 0, message: 'Hello'}),
			new Message({id: 1, message: 'Hi'})
		],
		curr_user: 0
	}
	onMessageSubmit = (e) => {
		const input = this.message;
		e.preventDefault();
		if (input.value.trim() === '') {
			return false;
		} 
		this.pushMessage(input.value);
		input.value = '';
		return true;
	}
	pushMessage(message) {
		const prevState = this.state;
		const newMessage = new Message({
			id: 0,
			message
		})
		prevState.messages.push(newMessage);
		this.setState(this.state);
	}
	render() {
        return (
			<div>
				<ul id="chat">
					<ChatFeed messages={this.state.messages}/>
				</ul>
				<form onSubmit={e => this.onMessageSubmit(e)} class="ui form" >
				<div class="field">
				  <input 
				  	  ref={m => {
							this.message = m
						}}
					  type="text" 
					  placeholder='Aa' 
					  style={{fontSize: '16px',width: '100%', borderRadius: '3px', marginBottom: '13px', border: 'none',display: 'block' }}
				  />
				</div>
		  </form>
		  </div>
        )
	}
}


export default MessageContainer;