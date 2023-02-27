import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Cover from '@/components/Cover';
import FriendInfo from '@/components/FriendInfo';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
	const [profile, setProfile] = useState(null);
	const router = useRouter();
	const { asPath: pathname } = router; // uses asPath to get proper route and renames to pathname
	const userId = router.query.id;
	const supabase = useSupabaseClient();
	const session = useSession();
	useEffect(() => {
		if (!userId) {
			return;
		}
		supabase
			.from('profiles')
			.select()
			.eq('id', userId)
			.then((result) => {
				if (result.error) {
					throw result.error;
				}
				if (result.data) {
					setProfile(result.data[0]);
				}
			});
	}, [userId]);
	const isMyUser = userId === session?.user?.id;
	const isPosts = pathname.includes('posts') || pathname === '/profile';
	const isAbout = pathname.includes('about');
	const isFriends = pathname.includes('friends');
	const isPhotos = pathname.includes('photos');

	const tabClasses = 'flex gap-1 px-4 py-1 items-center border-b-4 border-b-white';
	const activeTabClasses =
		'flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';
	return (
		<Layout>
			<Card noPadding={true}>
				<div className='relative overflow-hidden rounded-md'>
					<Cover url={profile?.cover} editable={isMyUser} />
					<div className='absolute top-24 left-4'>
						{profile && <Avatar url={profile.avatar} size={'lg'} />}
					</div>

					<div className='p-4 '>
						<div className='ml-40'>
							<h1 className=' text-3xl font-bold'>{profile?.name}</h1>

							<div className='text-gray-500 leading-4'>{profile?.place}</div>
						</div>
						<div className='mt-10 flex gap-0'>
							<Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
									/>
								</svg>
								<span className='hidden sm:block'>Posts</span>
							</Link>
							<Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
									/>
								</svg>
								<span className='hidden sm:block'>About</span>
							</Link>
							<Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
									/>
								</svg>
								<span className='hidden sm:block'>Friends</span>
							</Link>
							<Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>
								<span className='hidden sm:block'>Photos</span>
							</Link>
						</div>
					</div>
				</div>
			</Card>
			{isPosts && (
				<div>
					<PostCard />
				</div>
			)}

			{isAbout && (
				<div>
					<Card>
						<h2 className='mb-2 text-2xl'>About Me</h2>
						<p className='mb-2 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat sapien
							libero, ac viverra turpis bibendum vel. Cras semper lacinia est. Curabitur elementum
							efficitur nibh. Sed dapibus lorem et erat sollicitudin, eu dictum elit ultricies.
							Integer sagittis porta libero at condimentum. Etiam hendrerit ornare nisl. Proin
							mollis, ante ut imperdiet pretium, magna lacus finibus nunc, fermentum viverra elit
							leo quis neque. Nullam nec nunc sed risus lacinia luctus vel nec ante. Cras vehicula
							est in congue mattis. Ut lorem metus, consectetur vitae magna at, vulputate fermentum
							tellus.
						</p>
					</Card>
				</div>
			)}

			{isFriends && (
				<div>
					<Card>
						<h2>Friends</h2>
						<div className=''>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
							<div className='border-b border-b-gray-100 p-4 -mx-4'>
								<FriendInfo />
							</div>
						</div>
					</Card>
				</div>
			)}

			{isPhotos && (
				<div>
					<div>
						<Card>
							<div className='grid grid-cols-2 gap-4'>
								<div className='rounded-md overflow-hidden h-48 items-center shadow-md'>
									<img
										src='https://plus.unsplash.com/premium_photo-1670333242665-30b397067c37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
										alt=''
									/>
								</div>
								<div className='rounded-md overflow-hidden h-48 items-center shadow-md'>
									<img
										src='https://images.unsplash.com/photo-1676934834327-fe2e9fce4e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
										alt=''
									/>
								</div>
								<div className='rounded-md overflow-hidden h-48 items-center shadow-md'>
									<img
										src='https://images.unsplash.com/photo-1676973440045-f1b8f5abe88f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
										alt=''
									/>
								</div>
								<div className='rounded-md overflow-hidden h-48 items-center shadow-md'>
									<img
										src='https://images.unsplash.com/photo-1670617007161-b720c3eef493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
										alt=''
									/>
								</div>
							</div>
						</Card>
					</div>
				</div>
			)}
		</Layout>
	);
}
