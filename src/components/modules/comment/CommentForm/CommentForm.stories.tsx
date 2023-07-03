/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Thursday, 22nd June 2023 5:56:57 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Storybook
import { StoryFn } from '@storybook/react';

//  Component
import CommentForm from './CommentForm'

// Types
import { 
    CommentFormComponentProps
} from "@/types";

const config = {
    title: "Components/modules/CommentForm",
    component: CommentForm,
    tags: ['autodocs'],
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
};

const Template: StoryFn<CommentFormComponentProps> = (args) => {
    return(
            <CommentForm {...args} />
    )
}
export const Main: StoryFn<CommentFormComponentProps> = Template.bind({});

export default config