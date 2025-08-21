import { Management, Management_SupportedNFTUpdated } from "generated";

Management.SupportedNFTUpdated.handler(async ({ event, context }) => {
  let entity: Management_SupportedNFTUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    nftAddress: event.params.newNFTToken.toString(),
    isSupported: event.params.isSupported,
    hash: event.block.hash,
  };

  context.Management_SupportedNFTUpdated.set(entity);
});
