// Storybook
import { StoryFn } from '@storybook/react';

//  Component
import Counter from './Counter'

// Types
import { 
    CounterComponentProps
} from "@/types";

const config = {
    title: "Components/Counter",
    component: Counter,
    tags: ['autodocs'],
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
};

const Template: StoryFn<CounterComponentProps> = (args) => {
    return(
            <Counter {...args} />
    )
}
export const Main: StoryFn<CounterComponentProps> = Template.bind({});

export default config