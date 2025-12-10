from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 375, 'height': 812},
            device_scale_factor=2
        )
        page = context.new_page()

        # Load the app
        page.goto("http://localhost:8080/index.html")
        page.wait_for_selector("#zukan-grid")

        # 1. Verify Zukan List View (No marquee)
        # We need to find a character with a long name.
        # Based on previous knowledge or just scanning, we'll try to find one.
        # Or just take a screenshot of the list.
        page.screenshot(path="verification_screenshots/list_view.png")

        # 2. Verify Detail Header
        # Click on a character. Let's pick the first one.
        first_char = page.locator(".char-item-icon").first
        first_char.click()

        page.wait_for_selector(".detail-header")

        # Verify stacking of dates (visual check via screenshot)
        # Verify flex behavior of buttons
        page.screenshot(path="verification_screenshots/detail_view.png")

        # 3. Test Swipe Back Delay Removal
        # This is hard to test visually with a static screenshot,
        # but we can verify the back navigation works without crashing.
        page.go_back()
        page.wait_for_selector("#zukan-grid")

        # Take another screenshot to ensure we are back at list
        page.screenshot(path="verification_screenshots/back_to_list.png")

        browser.close()

if __name__ == "__main__":
    import os
    if not os.path.exists("verification_screenshots"):
        os.makedirs("verification_screenshots")
    verify_changes()
