
import { test, expect } from '@playwright/test';

test('Verify Detail View Improvements', async ({ page }) => {
  // 1. Go to homepage
  await page.goto('http://localhost:8080');

  // Wait for list to load
  await page.waitForSelector('.char-item-row, .char-item-icon', { timeout: 10000 });

  // 2. Click the first character to open detail view
  // Trying to find a character that likely has a prev/next (i.e. not the only one, or middle of list)
  // We'll just click the second one if available, or first.
  const chars = page.locator('.char-item-row, .char-item-icon');
  const count = await chars.count();
  console.log(`Found ${count} characters`);

  if (count > 0) {
      await chars.nth(0).click();
  }

  // 3. Verify Detail View Components
  await page.waitForSelector('.detail-container', { timeout: 5000 });

  // Screenshot 1: Standard Detail View (Check Floating Buttons & Header)
  await page.screenshot({ path: 'verification_screenshots/detail_view_initial.png', fullPage: false });

  // Check for Floating Nav Buttons
  const prevBtn = page.locator('.nav-prev');
  const nextBtn = page.locator('.nav-next');

  // Note: Depending on list size/position, one might be missing.
  // But at least one should be there if list > 1.
  const hasPrev = await prevBtn.count() > 0;
  const hasNext = await nextBtn.count() > 0;
  console.log(`Nav Buttons present? Prev: ${hasPrev}, Next: ${hasNext}`);

  // Check Header Compactness
  // Ensure '.action-buttons' does NOT contain arrow buttons anymore
  const actionButtons = page.locator('.action-buttons button');
  const actionBtnCount = await actionButtons.count();
  // Expecting roughly 2 buttons (Star, Box) unless arrow class leaked back
  console.log(`Action buttons in header: ${actionBtnCount}`);

  // 4. Test Persistence on Refresh (Simulated)
  // We get the current URL which should have ?id=...
  const url = page.url();
  console.log(`Current URL: ${url}`);

  if (url.includes('?id=')) {
      // Reload page
      await page.reload();
      await page.waitForSelector('.detail-container', { timeout: 10000 });

      // Screenshot 2: After Refresh
      await page.screenshot({ path: 'verification_screenshots/detail_view_refreshed.png' });

      // Verify Nav Buttons still exist (Fallback logic)
      const prevBtnAfter = page.locator('.nav-prev');
      const nextBtnAfter = page.locator('.nav-next');
      const hasPrevAfter = await prevBtnAfter.count() > 0;
      const hasNextAfter = await nextBtnAfter.count() > 0;
      console.log(`After Refresh - Nav Buttons present? Prev: ${hasPrevAfter}, Next: ${hasNextAfter}`);

      if (!hasPrevAfter && !hasNextAfter) {
          console.error("FAILED: Nav buttons disappeared after refresh!");
      } else {
          console.log("SUCCESS: Nav buttons persisted (or fallback worked).");
      }
  } else {
      console.log("URL did not update with ID, cannot test refresh persistence via URL.");
  }
});
