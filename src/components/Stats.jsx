import React from 'react'

const data = [
	['90%', 'SMOOTH MOTION'],
	['60 FPS', 'PERFORMANCE FOCUS'],
	['100%', 'SCROLL DRIVEN'],
	['24/7', 'INTERACTIVE EXPERIENCE'],
]

export default function Stats() {
	return (
		<ul className="stats grid grid-cols-2 min-[769px]:grid-cols-4" aria-label="Experience metrics">
			{data.map(([value, label], index) => (
				<li className="stat" key={label}>
					<span className="stat-index">0{index + 1}</span>
					<strong>{value}</strong>
					<span className="stat-label">{label}</span>
				</li>
			))}
		</ul>
	)
}
