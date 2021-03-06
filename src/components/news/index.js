import { h, Component } from 'preact'
import Article from './Article'

export default class News extends Component{
    constructor(){
        super();

        this.state = {
            articles: [],
            selectedCategory:''
        };
    }

    componentWillMount(){
        this.getNews();
    }

    componentDidMount(){
    }

    getNews(){
        fetch('https://early-api.herokuapp.com/api/news').then(d=>d.json()).then(d=>{
            if(d && d.data && d.message=="NEWS FOUND."){
                this.setState({articles:d.data.splice(20)});
            }else{

            }
        })
    }

    render(props,state){
        let articles = this.state.articles.map(article=> <Article article={article}/>)
        return (
                <div class="columns is-mobile is-multiline is-3" >
                    {articles}
                </div>
            
        )
    }
}