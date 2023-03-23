import './Hero.scss'
import hideHero from '../../functions/hideHero'

const Hero = () => {
	return(
		<section className="hero">
			<div className="container">
				<h1>
					Random facts about dogs and cats
				</h1>
				<div className="hero-wrapper">
					<div className="hero-dog">
						<picture>
							<source
								srcSet="public/img/hero/dog.webp"
								type="image/webp"
							/>
							<img src="public/img/hero/dog.png" width="300" height="300" alt="" />
						</picture>
					</div>
					<div className="hero-cat">
						<picture>
							<source
								srcSet="public/img/hero/cat.webp"
								type="image/webp"
							/>
							<img src="public/img/hero/cat.png" width="250" height="250" alt="" />
						</picture>
					</div>
				</div>
				<div className='button-wrapper'>
					<button onClick={ ()=> { hideHero( '.hero-wrapper', '.button-wrapper' ) } } className='get-fact'>
						Get facts
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero