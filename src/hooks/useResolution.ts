import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useResolution(resoultion = 480) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleResize = () => {
		let isMobileDevice = !!navigator.userAgent.match(/Mobile/) || false
		let width = window.innerWidth

		if (width <= resoultion) setIsMobile(true)
		else setIsMobile(false)
	}

	return isMobile
}

export default useResolution
