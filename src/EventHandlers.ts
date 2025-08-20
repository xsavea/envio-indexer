/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { Management, Management_SettingUpdated } from "generated";

import { formatUnits } from "viem";

import { SETTING_KEYS, MONTH, STATUS } from "../constants/index";

Management.SettingUpdated.handler(async ({ event, context }) => {
  let entity: Management_SettingUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: event.chainId.toString(),
    timestamp: BigInt(event.block.timestamp),
    key: SETTING_KEYS[Number(event.params.key)],
    value: String(event.params.value),
    hash: event.block.hash,
  };

  /// Filter exchage rate buy/sell events and format the value
  if (Number(event.params.key) == 3 || Number(event.params.key) == 4) {
    entity = { ...entity, value: formatUnits(event.params.value, 6) };
  }

  /// Filter Sale/Redeem state events and update value
  if (Number(event.params.key) == 6 || Number(event.params.key) == 7) {
    entity = { ...entity, value: STATUS[Number(event.params.value)] };
  }

  /// Filter month change events and update value
  if (Number(event.params.key) == 8) {
    const monthIndex = Number(event.params.value);
    const monthValue = MONTH[monthIndex] ?? `INVALID_MONTH_${monthIndex}`;
    entity = { ...entity, value: monthValue };
  }

  if (Number(event.params.key) == 9) {
    entity = { ...entity, value: `${formatUnits(event.params.value, 18)}%` };
  }

  context.Management_SettingUpdated.set(entity);
});
