

export function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function executedFunction(...args: T) {
    const later = () => {
      clearTimeout(timeoutId);
      func(...args);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };
}