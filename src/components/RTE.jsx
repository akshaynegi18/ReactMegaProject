import React from "react";
import {Editor} from '@tinymce/tinymce-react'
export default function RTE() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Rich Text Editor</h1>
        <textarea
          className="w-full h-full border border-gray-300 rounded-lg p-4"
          placeholder="Start writing..."
        ></textarea>
      </div>
    </div>
  );
}