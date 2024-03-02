import React from "react";

interface ImageUploadInputProps {
  name?: string;
  cloudName?: string; // Your Cloudinary cloud name
  uploadPreset?: string; // Your Cloudinary upload preset
  onChange: (imageUrl: string) => void;
  required?: boolean;
}

const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  name,
  cloudName,
  uploadPreset,
  onChange,
  required = false,
}) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];

      try {
        // Upload file to Cloudinary
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset!);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          onChange(imageUrl);

          // Save the image URL to MongoDB using Prisma
          // saveImageUrl(imageUrl);
        } else {
          throw new Error("Failed to upload image to Cloudinary");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error (e.g., display error message)
      }
    }
  };

  return (
    <input
      type="file"
      name={name}
      id={name}
      onChange={handleFileChange}
      required={required}
    />
  );
};

export default ImageUploadInput;
