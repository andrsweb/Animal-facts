import { useState, useEffect } from 'react'
import './Hero.scss'

const Hero = () => {
	const [ className, setClassName ] = useState( 'hero-wrapper' )
	const [ newHero, showNewHero ] = useState( 'new-hero' )
	const [ dogImage, setDogImage ] = useState( 'about:blank' )
	const [ catImage, setCatImage ] = useState( 'about:blank' )

		useEffect( () => {
			fetch( 'https://dog.ceo/api/breeds/image/random' )
			.then( ( response ) => response.json() )
			.then( ( json ) => setDogImage( json.message ) )
		}, [] )

		useEffect( () => {
			fetch( 'http://aws.random.cat/meow' )
			.then( ( response ) => response.json() )
			.then( ( json ) => setCatImage( json.file ) )
		}, [] )

	return(
		<section className="hero">
			<div className="container">
				<h1>
					Random image
				</h1>
				<div className={ className }>
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
					<div className='button-wrapper'>
					<button onClick={ () => { setClassName( 'hero-wrapper hide' ); setTimeout( () => showNewHero( 'new-hero showed' ), 1000 ) } }
						className='get-fact'>
						Get images
					</button>
				</div>
				</div>
				<div className={ newHero }>
					<div className="dog-card">
						<div className="dog-image">
							<img src={ dogImage } alt="" />
						</div>
						<div className="button-wrapper-new">
							<button className='generate-dog'>
								Generate dog
							</button>
						</div>
					</div>
					<div className="cat-card">
						<div className="cat-image">
							<img src={ catImage } alt="" width="300" height="300" />
						</div>
						<div className="button-wrapper-new">
							<button className='generate-dog'>
								Generate cat
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero