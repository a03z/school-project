export default function ErrorIcon({
	className,
	width,
	height,
}: {
	className?: string
	width?: string
	height?: string
}): JSX.Element {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			stroke-width='0'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			height={height}
			width={width}
			className={className}>
			<path d='M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.515,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 S16.411,16,12,16z'></path>
			<path d='M11 6H13V11H11zM11 12H13V14H11z'></path>
		</svg>
	)
}
