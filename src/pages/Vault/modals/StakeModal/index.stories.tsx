import { ComponentMeta, Story } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';
import { getContractAddress } from 'utilities';

import fakeAddress from '__mocks__/models/address';
import { withAuthContext, withCenterStory, withEnabledToken } from 'stories/decorators';

import StakeModal, { StakeModalProps } from '.';

export default {
  title: 'Pages/Vault/modals/StakeModal',
  component: StakeModal,
  decorators: [withCenterStory({ width: 600 })],
} as ComponentMeta<typeof StakeModal>;

const Template: Story<StakeModalProps> = args => <StakeModal {...args} />;

const authContext = {
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  account: {
    address: fakeAddress,
  },
};

export const Default = Template.bind({});
Default.args = {
  stakedTokenId: 'seb',
  rewardTokenId: 'mia',
  handleClose: noop,
};
Default.decorators = [
  withAuthContext(authContext),
  withEnabledToken({
    tokenId: 'seb',
    accountAddress: fakeAddress,
    spenderAddress: getContractAddress('sebUnitroller'),
  }),
];

export const WithoutConnectedAccount = Template.bind({});
WithoutConnectedAccount.args = {
  stakedTokenId: 'seb',
  rewardTokenId: 'mia',
  handleClose: noop,
};

export const WithDisabledToken = Template.bind({});
WithDisabledToken.args = {
  stakedTokenId: 'seb',
  rewardTokenId: 'mia',
  handleClose: noop,
};
WithDisabledToken.decorators = [withAuthContext(authContext)];

export const WithIsInitialLoading = Template.bind({});
WithIsInitialLoading.args = {
  stakedTokenId: 'seb',
  rewardTokenId: 'mia',
  handleClose: noop,
};
WithIsInitialLoading.decorators = [
  withAuthContext(authContext),
  withEnabledToken({
    tokenId: 'seb',
    accountAddress: fakeAddress,
    spenderAddress: getContractAddress('sebUnitroller'),
  }),
];
