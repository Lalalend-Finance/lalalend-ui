import { ComponentMeta, Story } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';
import { getContractAddress } from 'utilities';

import fakeAddress from '__mocks__/models/address';
import { withAuthContext, withCenterStory, withEnabledToken } from 'stories/decorators';

import MintRepaySeb, { MintRepaySebProps } from '.';

export default {
  title: 'Pages/Dashboard/MintRepaySeb',
  component: MintRepaySeb,
  decorators: [withCenterStory({ width: 600 })],
  parameters: {
    backgrounds: {
      default: 'Primary',
    },
  },
} as ComponentMeta<typeof MintRepaySeb>;

const Template: Story<MintRepaySebProps> = props => <MintRepaySeb {...props} />;

const context = {
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  account: {
    address: fakeAddress,
  },
};

export const Disconnected = Template.bind({});

export const Disabled = Template.bind({});
Disabled.decorators = [withAuthContext(context)];

export const Default = Template.bind({});
Default.decorators = [
  withAuthContext(context),
  withEnabledToken({
    tokenId: 'seb',
    accountAddress: fakeAddress,
    spenderAddress: getContractAddress('sebUnitroller'),
  }),
];
