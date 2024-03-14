"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import { setImageUrl } from "@/redux/slices/riderForm";
import { setImageName, setPublicId } from "@/redux/slices/imageUpload";

interface ImageUploadInputProps {
  name?: string;
  required?: boolean;
}

const UPLOADPRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const CLOUDNAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  name,
  required = false,
}) => {
  const { publicId, imageName } = useSelector(
    (state: RootState) => state.imageUpload
  );

  const dispatch = useDispatch();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      uploadImage(file);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      uploadImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const uploadImage = async (file: File) => {
    try {
      // Upload file to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOADPRESET!);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDNAME!}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url;
        // Dispatch actions to update Redux store
        dispatch(setPublicId(data.public_id));
        dispatch(setImageName(file.name));

        // Update form data with the image URL
        dispatch(setImageUrl(imageUrl));
      } else {
        throw new Error("Failed to upload image to Cloudinary");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div
      className="max-w-lg w-full p-4 mt-6 bg-opacity-80 bg-white border border-gray-400 rounded-3xl appearance-none"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex items-center">
        <div className="flex-1">
          {imageName && <p className="text-gray-700">Name: {imageName}</p>}
        </div>
        <div className="flex-1 pl-4">
          {publicId && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Uploaded Image"
              className="max-w-sm mx-auto rounded-2xl shadow-3xl"
            />
          )}
        </div>
      </div>
      {!publicId && (
        <div className="flex flex-col justify-center items-center text-gray-400 hover:text-gray-600 border-dashed border-2 border-gray-300 h-40 cursor-pointer transition duration-300">
          <FontAwesomeIcon
            icon={faCloudUploadAlt}
            className="text-4xl mb-2"
            width="50"
            height="50"
          />{" "}
          {/* Upload icon */}
          <label htmlFor={name}>
            Drag & drop your bike image here or click to upload
          </label>
          <input
            id={name}
            key={name}
            name={name}
            type="file"
            onChange={handleFileChange}
            required={required}
            className="hidden"
          />
          <button
            className="bg-[#ff4f00] hover:bg-[#ff621a] text-white font-semibold py-2 px-6 mt-4 focus:outline-none focus:shadow-outline rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => document.getElementById(name!)?.click()}
          >
            Browse
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadInput;
