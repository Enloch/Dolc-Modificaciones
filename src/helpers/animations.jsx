
/**
 * Slide down the given element over a specified duration.
 *
 * @param {Object} element - The HTML element to slide down.
 * @param {number} seconds - The duration of the slide down animation in seconds.
 * @param {Function} callback - (Optional) A callback function to be executed after the animation completes.
 * @return {number} - The timeout ID for the callback function, if provided.
 */
const slideDown = (element, seconds, callback) => {
    element.animate(
        [{ transform: 'translateY(-100%)' }, { transform: 'translateY(0%)' }],
        {
            easing: 'ease-in-out',
            duration: seconds * 1000,
        }
    )

    if (callback) {
        return setTimeout(callback, seconds * 1000)
    }
}

/**
 * Slides up an element by animating its translateY property.
 *
 * @param {HTMLElement} element - The element to slide up.
 * @param {number} seconds - The duration of the animation in seconds.
 * @param {function} callback - Optional callback function to be called after the animation completes.
 * @return {number} The ID of the setTimeout timer if a callback is provided.
 */
const slideUp = (element, seconds, callback) => {
    element.animate(
        [{ transform: 'translateY(0%)' }, { transform: 'translateY(-100%)' }],
        {
            easing: 'ease-in-out',
            duration: seconds * 1000,
        }
    )

    if (callback) {
        return setTimeout(callback, seconds * 1000)
    }
}

export { slideDown, slideUp }
