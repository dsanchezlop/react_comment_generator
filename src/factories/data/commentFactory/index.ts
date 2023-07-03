import { faker } from '@faker-js/faker';

import type { CommentObjectInterface } from '@/types';

export const createComment = (): CommentObjectInterface => {
    
    const id = faker.number.int()
    const projectId = faker.number.int()
    const title = faker.lorem.sentence()
    const value = faker.lorem.text()
    const createdUserId = faker.string.uuid()
    const createdDate = faker.date.recent()

    return {
        id,
        projectId,
        title,
        value,
        createdUserId,
        createdDate
    }
}