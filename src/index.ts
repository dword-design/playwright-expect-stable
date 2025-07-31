import { expect as base } from '@playwright/test';

export const expect = base.extend({
  toBeStable: async locator => {
    try {
      await locator.hover({ trial: true });
      return { message: () => `Expected element to not be stable`, pass: true };
    } catch (error) {
      return {
        message: () =>
          `Expected element to be stable, but it was not: ${error instanceof Error ? error.message : String(error)}`,
        pass: false,
      };
    }
  },
});
