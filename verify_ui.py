from playwright.sync_api import sync_playwright

def verify_ui_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:8080")

        # Default mode is 'icon', so we might not see .char-item-row.
        # Check for .char-item-icon instead or switch to list mode.
        try:
             # Try switching to list mode first (the second button in .mode-switch)
            page.wait_for_selector(".mode-btn", timeout=3000)
            mode_btns = page.locator(".mode-btn")
            if mode_btns.count() > 1:
                print("Switching to List Mode...")
                mode_btns.nth(1).click()

            page.wait_for_selector(".char-item-row", timeout=5000)
            print("Found .char-item-row")
        except Exception as e:
            print(f"List mode switch or wait failed: {e}")
            # If default is icon, we might need to click an icon
            if page.locator(".char-item-icon").count() > 0:
                print("Found .char-item-icon, clicking first one...")
                page.click(".char-item-icon:first-child")
            else:
                 print("No character items found.")
                 return

        # --- Verify Task 1: Detail Header Dates ---
        # If we clicked row, we are navigating.
        # If we clicked icon, we are navigating.
        # Wait for detail view to open
        try:
            page.wait_for_selector(".detail-header", timeout=5000)
        except:
             # If click didn't happen (maybe we are already in detail view?)
             pass

        # Verify .date-info styles
        date_info = page.locator(".date-info")
        if date_info.count() > 0:
            # Check flex-direction is column
            direction = date_info.evaluate("element => window.getComputedStyle(element).flexDirection")
            if direction != "column":
                print(f"FAILED: .date-info flex-direction is {direction}, expected 'column'")
            else:
                print("SUCCESS: .date-info flex-direction is column")

            # Check Order: Release, EZA, SEZA
            # We can check text content order
            text_content = date_info.inner_text()
            print(f"Date Info Content:\n{text_content}")

        else:
            print("FAILED: .date-info not found")

        # Take screenshot of detail header
        page.screenshot(path="verification_detail.png")

        # --- Verify Task 2: Loading Spinner ---
        # Inject script to show spinner manually to verify its styles
        page.evaluate("document.getElementById('page-loading').classList.remove('hidden')")

        # Wait a bit for visibility
        page.wait_for_timeout(500)

        # Check if visible
        is_visible = page.is_visible("#page-loading")
        if not is_visible:
            print("FAILED: #page-loading is not visible after removing 'hidden' class")
        else:
            print("SUCCESS: #page-loading is visible")

        # Take screenshot of spinner
        page.screenshot(path="verification_spinner.png")

        browser.close()

if __name__ == "__main__":
    verify_ui_changes()
