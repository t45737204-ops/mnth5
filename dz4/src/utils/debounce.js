export function debounser(fn, wait = 300) {
  let timeout = null;
  return function debounced(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, wait);
  };
}