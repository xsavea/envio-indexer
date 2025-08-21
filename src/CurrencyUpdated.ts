import { Management, Management_CurrencyUpdated } from "generated";

Management.CurrencyUpdated.handler(async ({ event, context }) => {
  let entity: Management_CurrencyUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    newCurrencyAddress: event.params.newCurrency.toString(),
    hash: event.block.hash,
  };

  context.Management_CurrencyUpdated.set(entity);
});
