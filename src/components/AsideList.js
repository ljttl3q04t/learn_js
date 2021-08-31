import React from 'react'
import './AsideList.css'

const users = ['Acc 1', 'Acc 2', 'Acc 3', 'Acc 4', 'Acc 5']

class AsideList extends React.Component {
	render() {
        return (
            <aside>
				<div id='people-list'>
		        <ul>
			        <li>
				        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
				        <div>
					        <h2>{users[0]}</h2>
					        <h3>
						        <span className="status orange"></span>
						        Offline
					        </h3>
				        </div>
			        </li>
			        <li>
				        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt=""/>
				<div>
					<h2>{users[1]}</h2>
					<h3>
						<span className="status green"></span>
						Online
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg" alt=""/>
				<div>
					<h2>{users[2]}</h2>
					<h3>
						<span className="status orange"></span>
						Offline
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg" alt=""/>
				<div>
					<h2>{users[3]}</h2>
					<h3>
						<span className="status green"></span>
						Online
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg" alt=""/>
				<div>
					<h2>{users[4]}</h2>
					<h3>
						<span className="status orange"></span>
						Offline
					</h3>
				</div>
			</li>
		</ul>
		</div>
	</aside>
        )
    }
}

export default AsideList;