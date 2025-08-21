import { Management, Management_TokenUpdated } from "generated";

Management.TokenUpdated.handler(async ({ event, context }) => {
  let entity: Management_TokenUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    newTokenAddress: event.params.newToken.toString(),
    hash: event.block.hash,
  };

  context.Management_TokenUpdated.set(entity);
});
