import { Management, Management_TokensSold } from "generated";

import { formatUnits } from "viem";

Management.TokensSold.handler(async ({ event, context }) => {
  let entity: Management_TokensSold = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    seller: event.params.seller.toString(),
    tokenAmount: formatUnits(event.params.tokenAmount, 18),
    currencyAmount: formatUnits(event.params.currencyAmount, 6),
    hash: event.block.hash,
  };

  context.Management_TokensSold.set(entity);
});
