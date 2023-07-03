/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 7:05:27 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Modules
import { faker } from '@faker-js/faker';

// Types
import type { 
    UserObjectInterface,
    GraphUserObjectInterface 
} from '@/types';


export const createUser = (): UserObjectInterface => {
    const id = faker.string.uuid()
    const email = faker.internet.email()
    const isActive = faker.datatype.boolean()
    const createdUserId = faker.string.uuid()
    const createdDate = faker.date.past()
    const lastUpdateDate = faker.date.recent()

    return {
        id,
        email,
        isActive,
        createdUserId,
        createdDate,
        lastUpdateDate,
    }
}


export const createGraphUser = (): GraphUserObjectInterface => {

    const id = faker.string.uuid()
    const businessPhones = [
        faker.phone.number(),
        faker.phone.number()
    ]
    const displayName = faker.person.firstName()
    const givenName = faker.person.firstName()
    const jobTitle = faker.person.jobTitle()
    const mail = faker.internet.email()
    const mobilePhone = faker.phone.number()
    const officeLocation = faker.location.city()
    const preferredLanguage = "en-US"
    const surname = faker.person.lastName()
    const userPrincipalName = faker.internet.email()

    return {
        id,
        businessPhones,
        displayName,
        givenName,
        jobTitle,
        mail,
        mobilePhone,
        officeLocation,
        preferredLanguage,
        surname,
        userPrincipalName
    }
}


export const createUserImage = (): string => {
    return faker.image.avatarGitHub()
}