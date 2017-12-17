import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Avatar from '../avatar'
export default class Header extends Component {
	render() {
		return (
			<header>
				<section class="hero is-primary is-medium">

					<div class="hero-head">
					<nav class="navbar">
						<div class="container">
						<div class="navbar-brand">
							<span class="navbar-burger burger" data-target="navbarMenuHeroA">
							<span></span>
							<span></span>
							<span></span>
							</span>
						</div>
						<div id="navbarMenuHeroA" class="navbar-menu">
							<div class="navbar-end">
							<span class="navbar-item">
								<a class="button is-primary is-inverted" href="https://github.com/bzmp125/bulpre-news" target="_blank">
								<span class="icon">
									<i class="fa fa-github"></i>
								</span>
								<span>Github (bzmp125/bulpre-news)</span>
								</a>
							</span>
							</div>
						</div>
						</div>
					</nav>
					</div>

					<div class="hero-body">
						<div class="container">
							<h1 class="title">
							Bulpre News
							</h1>
							<h2 class="subtitle">
							A news site built with Preact & Bulma CSS.
							</h2>
						</div>
					</div>

					<div class="hero-foot">
					<nav class="tabs">
						<div class="container">
						</div>
					</nav>
					</div>
				</section>
			</header>
		);
	}
}

/*						<ul>
							<li class="is-active"><a>All Categories</a></li>
							<li><Link href="/category/sports">Sports</Link></li>
							<li><Link href="/category/entertainment">Entertainment</Link></li>
							<li><Link href="/category/business">Business</Link></li>
							<li><Link href="/category/technology">Technology</Link></li>
							<li><Link href="/category/general">General</Link></li>
						</ul>


							<a class="navbar-item is-active" href="/">
								Home
							</a>


						*/