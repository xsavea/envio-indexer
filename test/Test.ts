import assert from "assert";
import { 
  TestHelpers,
  Management_SettingUpdated
} from "generated";
const { MockDb, Management } = TestHelpers;

describe("Management contract SettingUpdated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Management contract SettingUpdated event
  const event = Management.SettingUpdated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Management_SettingUpdated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Management.SettingUpdated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualManagementSettingUpdated = mockDbUpdated.entities.Management_SettingUpdated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedManagementSettingUpdated: Management_SettingUpdated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      key: event.params.key,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualManagementSettingUpdated, expectedManagementSettingUpdated, "Actual ManagementSettingUpdated should be the same as the expectedManagementSettingUpdated");
  });
});
