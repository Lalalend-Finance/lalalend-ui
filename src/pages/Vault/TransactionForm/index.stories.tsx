import { ComponentMeta, Story } from '@storybook/react';
import BigNumber from 'bignumber.js';
import React from 'react';

import { withCenterStory } from 'stories/decorators';

import TransactionForm, { TransactionFormProps } from '.';

export default {
  title: 'Pages/Vault/TransactionForm',
  component: TransactionForm,
  decorators: [withCenterStory({ width: 600 })],
} as ComponentMeta<typeof TransactionForm>;

const Template: Story<TransactionFormProps> = args => <TransactionForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  tokenId: 'seb',
  availableTokensWei: new BigNumber('193871256231321312312'),
  availableTokensLabel: 'Available SEB',
  submitButtonLabel: 'Stake',
  submitButtonDisabledLabel: 'Enter a valid amount to stake',
};

export const WithLockingPeriod = Template.bind({});
WithLockingPeriod.args = {
  tokenId: 'mia',
  availableTokensWei: new BigNumber('193871256231321312312'),
  availableTokensLabel: 'Available reward',
  submitButtonLabel: 'Make a request',
  submitButtonDisabledLabel: 'Enter a valid amount to make a request',
  lockingPeriodMs: 10800000000,
};
