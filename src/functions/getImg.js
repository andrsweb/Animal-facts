import { useEffect, useState } from "react"
const [ dogImage, setDogImage ] = useState( 'about:blank' )

const getImg = ( url ) => {
	useEffect( () => {
		fetch( url )
		.then( ( res ) => res.json() )
		.then( ( json ) => setDogImage( json.message ) )
	}, [] )
}

export default getImg