import { fireEvent } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import noop from 'noop-ts';
import React from 'react';

import renderComponent from 'testUtils/renderComponent';

import { TokenTextField } from '.';

const ONE_MIA = '1';
const MIA_DECIMALS = 18;
const testId = 'token-text-field-input';

describe('components/TokenTextField', () => {
  it('renders without crashing', async () => {
    renderComponent(<TokenTextField tokenId="mia" onChange={noop} value="" />);
  });

  it('does not let user enter value with more decimal places than token associated to tokenSymbol provided has', async () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = renderComponent(
      <TokenTextField tokenId="mia" onChange={onChangeMock} value="" data-testid={testId} />,
    );

    const input = getByTestId(testId) as HTMLInputElement;

    const oneWeiInMia = new BigNumber(ONE_MIA)
      .dividedBy(new BigNumber(10).pow(MIA_DECIMALS))
      .toFixed();

    // Update input value
    fireEvent.change(input, { target: { value: oneWeiInMia } });

    // Check value passed to onChange callback was correct
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(oneWeiInMia);

    // Update input value
    const invalidValue = new BigNumber(ONE_MIA)
      .dividedBy(new BigNumber(10).pow(MIA_DECIMALS + 1))
      .toFixed();
    fireEvent.change(input, { target: { value: invalidValue } });

    // Check onChange callback wasn't called again
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('passes the correct max and step values down to the TextField component', async () => {
    const oneWeiInMia = new BigNumber(ONE_MIA).dividedBy(new BigNumber(10).pow(18));

    const onChangeMock = jest.fn();
    const { getByTestId } = renderComponent(
      <TokenTextField
        tokenId="mia"
        onChange={onChangeMock}
        value=""
        data-testid={testId}
        max={ONE_MIA}
      />,
    );

    const input = getByTestId(testId) as HTMLInputElement;

    expect(input.max).toBe(ONE_MIA);
    expect(input.step).toBe(oneWeiInMia.toFixed());
  });

  it('renders max button and updates value to provided value when pressing on it', async () => {
    const onChangeMock = jest.fn();
    const rightMaxButton = {
      label: 'Test max button label',
      valueOnClick: ONE_MIA,
    };

    const { getByText } = renderComponent(
      <TokenTextField
        tokenId="mia"
        onChange={onChangeMock}
        value=""
        data-testid={testId}
        max={ONE_MIA}
        rightMaxButton={rightMaxButton}
      />,
    );

    const rightMaxButtonDom = getByText(rightMaxButton.label) as HTMLButtonElement;
    fireEvent.click(rightMaxButtonDom);

    // Check onChange callback was called with correct value
    expect(onChangeMock).toHaveBeenCalledWith(ONE_MIA);
  });
});