/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 5:59:55 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Factories
import { createGraphUser, createUserImage } from "@/factories/data/userFactory"

import { GraphUserImageInterface, GraphUserObjectInterface } from "../../types/data"

/**
 * getUsers: Get a List of GraphUserObjectInterface Objects
 * @returns {GraphUserObjectInterface[]}
 */
export const getUsers = (): GraphUserObjectInterface[] => {
    const users: GraphUserObjectInterface[] = [];
    const numUsers = 3; // Number of users generated
    for (let i = 0; i < numUsers; i++) {
      const user = createGraphUser();
      users.push(user);
    }
  
    return users;
  };

/**
 * getUser: Get a GraphUserObjectInterface Object
 * @returns 
 */
export const getUser = (): GraphUserObjectInterface => {
    return createGraphUser()
}

/**
 * getUserPhoto: Get a GraphUserImageInterface Object
 * @returns 
 */
export const getUserPhoto = (): GraphUserImageInterface => {
    return {
        url: createUserImage()
    }
}