import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

export default function ProfilePage() {
	return (
		<Layout>
			<Card noPadding={true}>
				<div className='relative overflow-hidden rounded-md'>
					<div className='h-36 overflow-hidden flex justify-center items-center'>
						<img
							src='https://images.unsplash.com/photo-1586356415056-bd7a5c2bbef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
							alt=''
						/>
					</div>
					<div className='absolute top-24 left-4'>
						<Avatar size={'lg'} />
					</div>

					<div className='p-4 pb-24'>
						<div className='ml-40'>
							<h1 className=' text-3xl font-bold'>John Doe</h1>
							<div className='text-gray-500 leading-4'>New York, NY</div>
						</div>
					</div>
				</div>
			</Card>
		</Layout>
	);
}
