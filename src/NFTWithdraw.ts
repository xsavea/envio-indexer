import { Management, Management_NFTWithdraw } from "generated";

import { formatUnits } from "viem";

Management.NFTWithdraw.handler(async ({ event, context }) => {
  let entity: Management_NFTWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    withdrawnTo: event.params.to.toString(),
    nftContract: event.params.nftContract.toString(),
    nftID: event.params.id,
    hash: event.block.hash,
  };

  context.Management_NFTWithdraw.set(entity);
});
