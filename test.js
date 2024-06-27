import { FocusRegionManager } from "@instructure/ui-a11y-utils";

export function createFocusTrap(target) {
  const focusRegion= FocusRegionManager.activateRegion(target, {
    shouldFocusOnOpen: true,
    shouldContainFocus: true,
    shouldReturnFocus: true,
    shouldCloseOnDocumentClick: false,
    shouldCloseOnEscape: false,
  });
  return focusRegion;
  //const removeFocusTrap = () => {
  //  FocusRegionManager.blurRegion(target);
  //};
  //return removeFocusTrap;
}

