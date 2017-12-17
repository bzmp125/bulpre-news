import {h, Component} from 'preact'
import moment from 'moment'
export default class Article extends Component{
    render(props,state){
        let article = props.article;
        return (
            <div class="card column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd is-narrow-desktop">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src={article.urlToImage} alt={article.title} style="min-width:100%;height:auto;margin:auto"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src={article.source.logo} alt={article.source.name} style="min-width:100%;height:auto;margin:auto"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"><a href={article.url}>{article.title}</a></p>
                        <p class="subtitle is-6">{article.source.name} - {article.author}</p>
                    </div>
                    </div>

                    <div class="content">
                        {article.description}
                        <br/>
                        
                        <time datetime="2016-1-1">{moment(article.publishedAt).calendar()}</time>
                    </div>
                </div>
            </div>
        )
    }
}