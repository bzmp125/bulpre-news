import { h, Component } from 'preact'
import style from './style.less'

export default class Avatar extends Component{
    constructor(){
        super();
        this.state
    }

    componentWillMount(){
        let name = `Mr ${this.props.name}`;
        this.setState({name});
    }

    render(props,state){
        return (
            <div>
                <img src={props.src} alt={props.name} class={style.img}/>
                <span>{props.name}</span>
            </div>
        )
    }
}