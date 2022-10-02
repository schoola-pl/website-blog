import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Articles = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return <p>Loading...</p>;
};

export default Articles;
