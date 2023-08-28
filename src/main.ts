window.addEventListener("keyup", function ({ keyCode, key, code }) {
  Object.entries({ keyCode, key: key.trim() || code, code }).forEach(([key, value]) => {
      document.querySelector(`[data-event="${key}"]`)!.textContent = value as string;
    }
  );
});