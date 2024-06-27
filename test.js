import { FocusRegionManager } from "@instructure/ui-a11y-utils";

export function createFocusTrap(target) {
  FocusRegionManager.activateRegion(target, {
    shouldFocusOnOpen: true,
    shouldContainFocus: true,
    shouldReturnFocus: true,
    shouldCloseOnDocumentClick: false,
    shouldCloseOnEscape: false,
  });

  const removeFocusTrap = () => {
    FocusRegionManager.blurRegion(target);
  };

  return removeFocusTrap;
}

const expertActionBarContent = document.getElementById("main");
if (expertActionBarContent) {
  console.log(expertActionBarContent);
  createFocusTrap(expertActionBarContent);
}
