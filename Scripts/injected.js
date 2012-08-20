safari.self.addEventListener("message", function(e) {
    if (e.name == "setting") {
        document.documentElement.classList[e.message.value ? 'add' : 'remove'](e.message.key);
    }
}, false);

if (window === window.top) {
    safari.self.tab.dispatchMessage('fetchSettings');
}
