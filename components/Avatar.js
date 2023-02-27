export default function Avatar({ size, url }) {
	let width = 'w-12';
	if (size === 'lg') {
		width = 'w-36';
	}
	return (
		<div className={`${width} rounded-full overflow-hidden`}>
			<img className='w-full' src={url} alt='' />
		</div>
	);
}
