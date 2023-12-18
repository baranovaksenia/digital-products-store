import { RefObject, useEffect } from "react";

// Define a union type for mouse and touch events
type Event = MouseEvent | TouchEvent;

/**
 * Custom hook to handle clicks outside a specified element.
 * @param ref - Ref object representing the target element.
 * @param handler - Callback function to execute when a click occurs outside the element.
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void
) => {
	useEffect(() => {
		// Event listener to handle clicks outside the specified element
		const listener = (event: Event) => {
			const el = ref?.current;
			// Check if the element exists and the click is outside it
			if (!el || el.contains((event?.target as Node) || null)) {
				return;
			}

			handler(event); // Call the handler only if the click is outside of the element passed.
		};

		// Attach event listeners for mouse and touch events
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		// Cleanup: Remove event listeners when the component unmounts or the dependencies change
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]); // Reload only if ref or handler changes
};
