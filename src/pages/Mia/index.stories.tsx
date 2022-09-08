import { ComponentMeta } from '@storybook/react';

import { withRouter } from 'stories/decorators';

import Mia from '.';

export default {
  title: 'Pages/Mia',
  component: Mia,
  decorators: [withRouter],
} as ComponentMeta<typeof Mia>;

export { Mia };
