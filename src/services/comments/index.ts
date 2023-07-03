/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 5:59:04 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Factories
import { createComment } from '@/factories/data/commentFactory'
// Types
import type { CommentObjectInterface } from '@/types'

/**
 * Get Comments: Get a List of comments
 * @returns {CommentObjectInterface[]}
 */
export const getComments = (): CommentObjectInterface[] => {
    const comments: CommentObjectInterface[] = [];
    const numComments = 3; // Number of comments generated
    for (let i = 0; i < numComments; i++) {
      const comment = createComment();
      comments.push(comment);
    }
  
    return comments;
  };

/**
 * Get Comment: Get a comment Object
 * @returns 
 */
export const getComment = (): CommentObjectInterface => {
    return createComment()
}