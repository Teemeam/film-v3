import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.PUBLIC_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const fetchImages = async () => {
  const result = await cloudinary.search
    .expression('folder:film/*')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

  return result.resources.map((resource: any) => resource);
};
