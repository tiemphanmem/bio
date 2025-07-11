import { notFound } from 'next/navigation';
import { profiles } from '@/data/profiles';
import UserCard from '@/components/UserCard';

export default async function Page({ params }: { params: { uname: string } }) {
  const profile = profiles.find((p) => p.user.uname === params.uname);

  if (!profile) return notFound();

  return <UserCard profileData={profile} />;
}

export async function generateStaticParams() {
  return profiles.map((profile) => ({
    uname: profile.user.uname,
  }));
}
