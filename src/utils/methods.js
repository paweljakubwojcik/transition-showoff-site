/**
 *
 * @param {HTMLElement} element
 * @returns {{x:number, y:number}}
 */
export const getElementPosition = element => {
  return {
    x:
      element.offsetLeft +
      (element.offsetParent
        ? getElementPosition(element.offsetParent).x -
          element.offsetParent.scrollLeft
        : 0),
    y:
      element.offsetTop +
      (element.offsetParent
        ? getElementPosition(element.offsetParent).y -
          element.offsetParent.scrollTop
        : 0),
  }
}
