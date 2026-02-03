
'use client';

import { useEffect, useState } from 'react';
import { GetPhotoById } from '@/src/application/use-cases/GetPhotoById';
import { CloudinaryPhotoRepository } from '@/src/infrastructure/CloudinaryPhotoRepository';
import { Photo } from '@/src/domain/entities/Photo';
import Image from 'next/image';

// Initialize the repository and use case
const photoRepository = new CloudinaryPhotoRepository();
const getPhotoById = new GetPhotoById(photoRepository);

export default function Home() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Static photo ID for testing - replace with your actual Cloudinary photo ID
  const testPhotoId = "Photos/sjlslihst3ykivpuqj4n"; // Replace with your actual photo ID

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedPhoto = await getPhotoById.execute(testPhotoId);
        setPhoto(fetchedPhoto);
      } catch (err) {
        setError('Failed to fetch photo');
        console.error('Error fetching photo:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photo Gallery Test</h1>
      
      {loading && <p>Loading photo...</p>}
      
      {error && <p className="text-red-500">{error}</p>}
      
      {photo && (
        <div className="max-w-2xl">
          <h2 className="text-xl mb-4">{photo.getTitle()}</h2>
          <div className="relative w-full aspect-[4/3]">
            <Image 
              src={photo.getUrl()} 
              alt={photo.getTitle()}
              fill
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Photo ID: {photo.getId()}</p>
        </div>
      )}
    </main>
  );
}
