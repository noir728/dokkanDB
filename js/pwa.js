/**
 * PWA Installation Logic
 */

let deferredPrompt;
const pwaBanner = document.getElementById('pwa-install-banner');
const installBtn = document.getElementById('pwa-install-btn');
const closeBtn = document.getElementById('pwa-close-btn');

// Check if app is already running in standalone mode (installed)
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

// Detect iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function showBanner() {
    if (pwaBanner) pwaBanner.classList.remove('hidden');
}

function hideBanner() {
    if (pwaBanner) pwaBanner.classList.add('hidden');
}

// Android / Desktop (Chrome/Edge)
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    // Only show if not already installed
    if (!isStandalone) {
        showBanner();
    }
});

// iOS Logic (No beforeinstallprompt event)
// We show the banner if it's iOS and not standalone
if (isIOS && !isStandalone) {
    // Maybe wait a bit before showing?
    setTimeout(() => {
        showBanner();
    }, 2000);
}


if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);

            // We've used the prompt, and can't use it again, throw it away
            deferredPrompt = null;
            hideBanner();
        } else if (isIOS) {
            // iOS Instructions
            alert('このアプリをホーム画面に追加するには:\n\n1. 下の「共有」アイコン (四角から矢印が出ているアイコン) をタップします。\n2. 「ホーム画面に追加」を選択します。');
            hideBanner();
        } else {
            // Fallback
            alert('ブラウザのメニューから「ホーム画面に追加」または「アプリをインストール」を選択してください。');
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        hideBanner();
    });
}

// Optionally hide banner if app is installed
window.addEventListener('appinstalled', () => {
    hideBanner();
    deferredPrompt = null;
    console.log('PWA was installed');
});
