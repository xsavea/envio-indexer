import { Management, Management_TokensPurchased } from "generated";

import { formatUnits } from "viem";

Management.TokensPurchased.handler(async ({ event, context }) => {
  let entity: Management_TokensPurchased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    buyer: event.params.buyer.toString(),
    currencyAmount: formatUnits(event.params.currencyAmount, 6),
    tokenAmount: formatUnits(event.params.tokenAmount, 18),
    hash: event.block.hash,
  };

  context.Management_TokensPurchased.set(entity);
});
