const hideHero = ( wrapper, button ) => {
	const heroWrapper = document.querySelector( wrapper )
	const buttonWrapper = document.querySelector( button )

	if( ! heroWrapper && heroButton ) return

	heroWrapper.classList.add( 'hide' )
	buttonWrapper.classList.add( 'hide' )
}

export default hideHero