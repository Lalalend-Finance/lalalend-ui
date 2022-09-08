import { ComponentMeta, Story } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';
import { getContractAddress } from 'utilities';

import fakeAddress from '__mocks__/models/address';
import { withAuthContext, withCenterStory, withEnabledToken } from 'stories/decorators';

import WithdrawFromSebVaultModal, { WithdrawFromSebVaultModalProps } from '.';

export default {
  title: 'Pages/Vault/modals/WithdrawFromSebVaultModal',
  component: WithdrawFromSebVaultModal,
  decorators: [withCenterStory({ width: 600 })],
} as ComponentMeta<typeof WithdrawFromSebVaultModal>;

const Template: Story<WithdrawFromSebVaultModalProps> = args => (
  <WithdrawFromSebVaultModal {...args} />
);

const authContext = {
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  account: {
    address: '0x0000000000000000000000000000000000000000',
  },
};

export const Default = Template.bind({});
Default.args = {
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
  handleClose: noop,
};

export const WithDisabledToken = Template.bind({});
WithDisabledToken.args = {
  handleClose: noop,
};
WithDisabledToken.decorators = [withAuthContext(authContext)];

export const WithIsInitialLoading = Template.bind({});
WithIsInitialLoading.args = {
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
