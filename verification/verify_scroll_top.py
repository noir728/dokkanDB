from playwright.sync_api import sync_playwright

def verify_scroll_top_btn():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 375, 'height': 812}) # Mobile viewport
        page = context.new_page()

        # Navigate to local server
        page.goto("http://localhost:8080/index.html")

        # Initial check - btn should be invisible
        btn = page.locator("#scroll-top-btn")
        # Check if it exists in DOM
        print(f"Button text: {btn.inner_text()}")

        # Simulate scroll to trigger visibility
        page.evaluate("document.getElementById('main-content').scrollTop = 400")
        page.evaluate("document.getElementById('main-content').dispatchEvent(new Event('scroll'))")

        # Wait for opacity transition
        page.wait_for_timeout(1000)

        # Take screenshot
        page.screenshot(path="verification/verification.png")

        browser.close()

if __name__ == "__main__":
    verify_scroll_top_btn()
