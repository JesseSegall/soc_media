import Card from '@/components/Card';
import NavigationCard from '@/components/NavigationCard';
import PostCard from '@/components/PostCard';
import PostFormCard from '@/components/PostFormCard';

export default function Home() {
	return (
		<div className='flex mt-4 max-w-4xl mx-auto gap-4'>
			<div className='w-1/4'>
				<NavigationCard />
			</div>
			<div className='w-3/4'>
				<div className=''>
					<PostFormCard />
					<PostCard />
				</div>
			</div>
		</div>
	);
}
