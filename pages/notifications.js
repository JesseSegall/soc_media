import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function NotificationsPage(params) {
	return (
		<Layout>
			<h1 className='text-4xl mb-4 text-gray-400 '>Notifications</h1>
			<Card noPadding={true}>
				<div className=''>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4 '>
						<Link href={'/profile'}>
							<Avatar />
						</Link>

						<div>
							<Link href={'/profile'} className='font-semibold mr-1 hover:underline'>
								John Doe
							</Link>
							liked
							<Link href={''} className='text-socialBlue hover:underline ml-1'>
								your photo
							</Link>
						</div>
					</div>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4 '>
						<Link href={'/profile'}>
							<Avatar />
						</Link>

						<div>
							<Link href={'/profile'} className='font-semibold mr-1 hover:underline'>
								John Doe
							</Link>
							liked
							<Link href={''} className='text-socialBlue hover:underline ml-1'>
								your photo
							</Link>
						</div>
					</div>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4 '>
						<Link href={'/profile'}>
							<Avatar />
						</Link>

						<div>
							<Link href={'/profile'} className='font-semibold mr-1 hover:underline'>
								John Doe
							</Link>
							liked
							<Link href={''} className='text-socialBlue hover:underline ml-1'>
								your photo
							</Link>
						</div>
					</div>
				</div>
			</Card>
		</Layout>
	);
}
