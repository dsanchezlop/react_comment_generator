import { addons } from '@storybook/manager-api';
import CustomTheme from './theme';

addons.setConfig({
    theme: CustomTheme,
});