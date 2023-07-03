/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Thursday, 22nd June 2023 5:56:57 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Components
import { useState } from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { WithTitleAndPillActionsTextArea } from '@/components/ui/WithTitleAndPillActionsTextArea';

// Faker
import { createUserImage } from '@/factories/data/userFactory';
import { createUser } from '@/factories/data/userFactory';

const CommentForm = () => {
  
  // Data
  const user = createUser();
  const userImage = createUserImage();

  // Uploading State
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);

    // Simulating an asynchronous upload process
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };
  return (
    <div className="bg-white px-4 py-6 sm:px-6">
      <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <Avatar imageUrl={userImage} />
          </div>
          <div className="min-w-0 flex-1">
          <WithTitleAndPillActionsTextArea
            onUpload={handleUpload}
            isUploading={isUploading}
          />
          </div>
      </div>
    </div>
  )
}

export default CommentForm;