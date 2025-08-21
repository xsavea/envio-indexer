import { Management, Management_Withdraw } from "generated";

import { formatUnits } from "viem";

Management.Withdraw.handler(async ({ event, context }) => {
  let entity: Management_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    withdrawnTo: event.params.to.toString(),
    token: event.params.token.toString(),
    amount: formatUnits(event.params.amount, 18),
    hash: event.block.hash,
  };

  context.Management_Withdraw.set(entity);
});
