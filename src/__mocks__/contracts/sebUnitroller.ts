import { SebUnitroller } from 'types/contracts_evmos';

const sebUnitrollerResponses: {
  getMintableSEB: Awaited<
    ReturnType<ReturnType<SebUnitroller['methods']['getMintableSEB']>['call']>
  >; 
} = {
  getMintableSEB: {
    0: '20000000000000000000',
    1: '40000000000000000000',
  },
};

export default sebUnitrollerResponses;
