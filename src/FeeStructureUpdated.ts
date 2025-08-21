import { Management, Management_FeeStructureUpdated } from "generated";

Management.FeeStructureUpdated.handler(async ({ event, context }) => {
  let entity: Management_FeeStructureUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    fee: event.params.feeStructure[0],
    period: event.params.feeStructure[1],
    minimumAmount: event.params.feeStructure[2],
    hash: event.block.hash,
  };

  context.Management_FeeStructureUpdated.set(entity);
});
