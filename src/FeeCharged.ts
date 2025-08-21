import { Management, Management_FeeCharged } from "generated";
import { formatUnits } from "viem";

Management.FeeCharged.handler(async ({ event, context }) => {
  let entity: Management_FeeCharged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    chargedFrom: event.params.wallet.toString(),
    amount: formatUnits(event.params.amount, 18),
    hash: event.block.hash,
  };

  context.Management_FeeCharged.set(entity);
});
