import { h, Component } from 'preact'
import Article from './../Article'
import style from '../../home/style.less'

export default class category extends Component{
    constructor(){
        super();

        this.state = {
            articles: [],
            selectedCategory:''
        };
    }

    componentWillMount(){
    }

    componentDidMount(){
        this.getNews();
    }

    getNews(){
        let categorySources = [];
        let apiKey = '1e391faffbd54044a7e32904c810be38'

        fetch(`https://early-api.herokuapp.com/api/news/sources`).then(d=>d.json()).then(d=>{

            if(d && d.data){
                d.data.map(source=>{
                    if(source.category==this.props.category){
                        
                        fetch(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${apiKey}`).then(d=>d.json()).then(d=>{
                            if(d && d.articles && d.articles.length>0 && d.status=="ok"){
                                d.articles.map(article=>{
                                    article.source = source;
                                })
                                console.log('source',source)
                                
                                this.setState({articles:this.state.articles.concat(d.articles)});
                            }
                        })
                    }
                })

            }
        })
    }

    render(props,state){
        alert('sdasa'+props.category)
        let articles = this.state.articles.map(article=> <Article article={article}/>)
        return (
			<div class={style.home}>
                <section class="section">
                    <div class="container">
                        <div class="columns is-mobile is-multiline is-3" >
                            {articles}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}   