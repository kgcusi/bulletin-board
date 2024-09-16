// src/components/DeleteModal.jsx
import React from 'react';

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 rounded p-6 w-80">
        <p className="mb-6">Are you sure you want to delete this article?</p>
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
