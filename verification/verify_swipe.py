
from playwright.sync_api import Page, expect, sync_playwright
import time

def test_swipe_navigation(page: Page):
    # 1. Open the application
    page.goto("http://localhost:8080")

    # Wait for the list to load
    page.wait_for_selector(".char-item-row, .char-item-icon", timeout=10000)

    # 2. Click the second character (index 1) to ensure we have prev/next potential
    chars = page.locator(".char-item-row, .char-item-icon")
    count = chars.count()
    print(f"Found {count} characters")

    if count < 2:
        print("Not enough characters to test full navigation")
        return

    # Click index 1 (second character)
    chars.nth(1).click()

    # Wait for detail view
    page.wait_for_selector(".detail-container-wrapper", timeout=5000)

    # 3. Verify Buttons are GONE
    prev_btn = page.locator(".nav-prev")
    next_btn = page.locator(".nav-next")

    expect(prev_btn).not_to_be_visible()
    expect(next_btn).not_to_be_visible()
    print("Verified navigation buttons are hidden.")

    # Capture initial state
    initial_name = page.locator(".char-name-header").inner_text()
    print(f"Initial Character: {initial_name}")
    page.screenshot(path="verification/before_swipe.png")

    # 4. Perform Swipe Left (Next Character)
    # Simulate touch events if possible, or use mouse drag if logic supports it.
    # The code uses 'touchstart' and 'touchend' which Playwright can simulate via CDPH or basic mouse if configured,
    # but strictly it requires touch emulation.

    # We will try to use mouse to simulate touch if the browser supports touch emulation or if the logic fallback to mouse (it doesn't).
    # Playwright's page.touchscreen needs a device with touch support.

    # Let's try to simulate touch events manually using evaluate if needed, or use touchscreen API.
    # We are using desktop chrome by default in Playwright unless specified otherwise.
    # But we can try to use `page.touchscreen.tap` etc.

    # Let's try to use mouse as "finger" if the browser treats it as touch (it usually doesn't without config).
    # However, since we cannot easily reconfigure the browser context here to be mobile in this script easily without changing the launch options significantly,
    # we will rely on `page.evaluate` to dispatch TouchEvents.

    print("Attempting Swipe Left (Next)...")

    # Swipe Left: StartX > EndX (e.g., 300 -> 100)
    page.evaluate("""
        () => {
            const container = document.querySelector('.detail-container-wrapper');
            if (!container) return;

            const createTouch = (x, y) => {
                return new Touch({
                    identifier: Date.now(),
                    target: container,
                    clientX: x,
                    clientY: y,
                    screenX: x,
                    screenY: y,
                    pageX: x,
                    pageY: y
                });
            };

            const startX = 300;
            const startY = 300;
            const endX = 100;
            const endY = 300;

            const touchStart = new TouchEvent('touchstart', {
                bubbles: true,
                cancelable: true,
                changedTouches: [createTouch(startX, startY)]
            });

            container.dispatchEvent(touchStart);

            const touchEnd = new TouchEvent('touchend', {
                bubbles: true,
                cancelable: true,
                changedTouches: [createTouch(endX, endY)]
            });

            container.dispatchEvent(touchEnd);
        }
    """)

    # Wait for animation/navigation
    time.sleep(1)

    # Verify Character Changed
    next_name = page.locator(".char-name-header").inner_text()
    print(f"Character after Swipe Left: {next_name}")

    if initial_name != next_name:
        print("SUCCESS: Swipe Left navigated to next character.")
    else:
        print("FAILURE: Swipe Left did NOT navigate.")

    # Screenshot result
    page.screenshot(path="verification/after_swipe_left.png")

    # 5. Perform Swipe Right (Prev Character)
    print("Attempting Swipe Right (Prev)...")

    # Swipe Right: StartX < EndX (e.g., 100 -> 300)
    page.evaluate("""
        () => {
            const container = document.querySelector('.detail-container-wrapper');
            if (!container) return;

            const createTouch = (x, y) => {
                return new Touch({
                    identifier: Date.now(),
                    target: container,
                    clientX: x,
                    clientY: y,
                    screenX: x,
                    screenY: y,
                    pageX: x,
                    pageY: y
                });
            };

            const startX = 100;
            const startY = 300;
            const endX = 300;
            const endY = 300;

            const touchStart = new TouchEvent('touchstart', {
                bubbles: true,
                cancelable: true,
                changedTouches: [createTouch(startX, startY)]
            });

            container.dispatchEvent(touchStart);

            const touchEnd = new TouchEvent('touchend', {
                bubbles: true,
                cancelable: true,
                changedTouches: [createTouch(endX, endY)]
            });

            container.dispatchEvent(touchEnd);
        }
    """)

    time.sleep(1)

    final_name = page.locator(".char-name-header").inner_text()
    print(f"Character after Swipe Right: {final_name}")

    if final_name == initial_name:
        print("SUCCESS: Swipe Right navigated back to initial character.")
    else:
         print("FAILURE: Swipe Right did NOT navigate back.")

    page.screenshot(path="verification/after_swipe_right.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        # Launch with mobile emulation just in case, though dispatchEvent should work regardless
        browser = p.chromium.launch(headless=True)
        # Context with touch enabled
        context = browser.new_context(has_touch=True)
        page = context.new_page()
        try:
            test_swipe_navigation(page)
        finally:
            browser.close()
