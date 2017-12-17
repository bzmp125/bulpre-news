import {h, Component} from 'preact'
import style from './style.less';
import Avatar from '../avatar'
import News from '../news'
export default class Home extends Component{


	render(props,state){
		console.log('props from Home',props)
		return (
			<div class={style.home}>
				<section class="section">
					<div class="container">
						<News category={props.category}/>
					</div>
				</section>
	
			</div>
		);
	}
};
