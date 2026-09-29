import React from 'react'

export default function CarVisual() {
	return (
		<figure className="car-wrap" aria-label="BMW M4 performance coupe">
			<div className="car-aura" aria-hidden="true" />
			<img
				className="car-image"
				src={`${import.meta.env.BASE_URL}assets/bmw-m4.svg`}
				alt="Silver BMW M4 performance coupe in a cinematic side view"
				draggable="false"
			/>
			<div className="headlight-glow" aria-hidden="true" />
		</figure>
	)
}
