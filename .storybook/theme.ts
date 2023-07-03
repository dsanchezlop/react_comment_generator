import { create } from '@storybook/theming/create';

// @ts-ignore
import ApplusLaboratoriesLogo from '../public/img/applus-laboratories-logo.png';

export default create({
    base: 'dark',
    brandUrl: 'https://www.appluslaboratories.com/',
    brandImage: ApplusLaboratoriesLogo,
    brandTarget: '_self',
});