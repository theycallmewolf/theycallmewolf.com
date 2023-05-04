/**
 * The trick to viewport units on mobile
 * @link https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */

export function setViewportHeight(): void {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--v-height', `${vh}px`);
}
