import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

type Props = {
  // eslint-disable-next-line no-unused-vars
  onDropFile: (files: File | File[]) => void;
  multipleFile?: boolean;
};

export function FileUploader({ onDropFile, multipleFile = false }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const MAX_FILE_SIZE_ALLOWED = 5242880; // 5 MB

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: MAX_FILE_SIZE_ALLOWED,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    multiple: multipleFile,
    onDrop: (acceptedFiles: File[]) => {
      onDropFile(multipleFile ? acceptedFiles : acceptedFiles[0]);
      setFiles(acceptedFiles);
    }
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name} className="h-full w-full">
      <Image
        src={URL.createObjectURL(file)}
        className="mx-auto max-h-full max-w-xs rounded-md object-contain"
        alt="uploaded image"
        width={320}
        height={320}
      />
    </div>
  ));

  return (
    <div
      {...getRootProps({
        className:
          'flex max-w-lg justify-center rounded-md border-2 border-dashed border-brand-900 px-6 pt-5 pb-6'
      })}
    >
      <div className="space-y-1 text-center">
        <input {...getInputProps()} />
        {files.length > 0 ? (
          thumbs
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className=" text-center text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none"
              >
                <span>Subir archivo</span>
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up hasta 5MB</p>
          </>
        )}
      </div>
    </div>
  );
}
