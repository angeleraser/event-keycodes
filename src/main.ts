const container = document.getElementById("container") as HTMLDivElement;

window.addEventListener("keyup", function ({ keyCode, key, code }) {
  Object.entries({ keyCode, key: key.trim() || code, code }).forEach(
    ([key, value]) => {
      const kbdEl = document.querySelector(`[data-event="${key}"]`);
      kbdEl!.textContent = value as string;
    }
  );
});
