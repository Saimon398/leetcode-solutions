/**
 * @link https://leetcode.com/problems/sort-colors/
 * @description Objects colored red, white, or blue, sort them in-place
 * so that objects of the same color are adjacent
 * @param {Object []} colors
 *
 * Solution is based on quick sort algorithm
 */
const sortColors = (colors) => {
  // Terminal Case
  if (colors.length <= 1) {
    return;
  }
  // Select pivot item in array
  const [pivot] = colors;
  const smallerThan = [];
  const equal = [];
  const greaterThan = [];

  // Iterate through all colors and compare
  // the rest to him, allocating them
  // according to their value
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    if (color < pivot) {
      smallerThan.push(color);
    } else if (color === pivot) {
      equal.push(color);
    } else {
      greaterThan.push(color);
    }
  }
  // Launch sort algo for arrays with
  // smaller and greater values
  sortColors(smallerThan);
  sortColors(greaterThan);

  // Swap items in the original array
  let i = 0;
  for (const color of [...smallerThan, ...equal, ...greaterThan]) {
    colors[i] = color;
    i += 1;
  }
};

export default sortColors;
