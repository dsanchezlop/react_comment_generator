// Icons
import { PaperClipIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

import type { WithTitleAndPillActionsTextAreaComponentProps } from '@/types';

const WithTitleAndPillActionsTextArea = (props: WithTitleAndPillActionsTextAreaComponentProps) => {
  const [isUploading, setIsUploading] = useState(false);

  //Added handleUpload
  const handleUpload = () => {
    setIsUploading(true);
    // Perform upload logic here

    // Once the upload is complete, set isUploading to false
    // For example, you can use a setTimeout to simulate the upload process
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  return (
    <form action="#" className="relative">
      {/* Form content */}

      <div className="absolute bottom-0 inset-x-px">
        <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
              onClick={handleUpload} // Call the handleUpload function on button click
              disabled={isUploading} // Disable the button while uploading is in progress
            >
              <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true" />
              <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">
                Attach a file
              </span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WithTitleAndPillActionsTextArea;
