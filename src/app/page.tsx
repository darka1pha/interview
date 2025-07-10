'use client';

import Button from '@/components/button';
import { UserPayload } from '@/lib/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<UserPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      window.location.href = '/auth';
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/auth';
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-3'>
      <h1 className='text-2xl font-bold'>Welcome, {user?.name}!</h1>
      <div className='relative h-36 w-36 rounded-full overflow-hidden'>
        <Image
          src={user ? user.avatar : ''}
          alt='avatar'
          fill
          priority
          quality={100}
        />
      </div>
      <p className='mt-2'>
        <span>Email: {user?.email}</span> / <span>Phone: {user?.phone}</span>
      </p>
      <div className='mt-6'>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
