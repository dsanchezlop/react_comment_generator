/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Thursday, 22nd June 2023 7:07:32 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Types
import { AvatarComponentProps } from "@/types";

const Avatar = (props: AvatarComponentProps) => {
    return(
        <img 
            src={props.src} 
            alt={props.alt} 
            className="h-10 w-10 rounded-full"/>
    )
}

export default Avatar