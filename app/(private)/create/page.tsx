'use client';
import { useState } from 'react';

const CreatePost = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle image submission logic here
    console.log(image);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-[50%] md:mt-0">
      <form onSubmit={handleSubmit} className="w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>

        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm
              px-3 py-1.5 border rounded
              cursor-pointer outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-dark hover:bg-dark/90 text-light font-semibold rounded py-2"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
