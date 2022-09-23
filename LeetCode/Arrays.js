const colors = [2,0,2,1,1,0];

const sortColors = (colors) => {
  if(colors.length <= 1) {
    return;
  }
  const [pivot] = colors;
  const smallerThan = [];
  const equal = [];
  const greaterThan = [];

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    if (color < pivot) {
      smallerThan.push(color);
    }
    else if (color === pivot) {
      equal.push(color);
    }
    else {
      greaterThan.push(color);
    }
  }

  sortColors(smallerThan);
  sortColors(greaterThan);

  let i = 0;
  for(const color of [...smallerThan, ...equal, ...greaterThan]) {
    colors[i] = color;
    i += 1;
  }
};
