import './Header.scss'

const Header = ( { text } ) => {
	return (
		<header className='header'>
			<div className="container">
				<div className="header-wrapper">
					<div className="header-text">
							{ text }
					</div>
					<a href='/' className="header-logo">
						<picture>
							<source
								srcSet="public/img/header/logo.webp"
								type="image/webp"
							/>
							<img src="public/img/header/logo.png" width="100" height="100" alt="" />
						</picture>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header