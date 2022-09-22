
const uniqueOccurrences = (collection) => {
  const hashMap = collection
    .reduce((acc, item) => {
      acc[item] = (acc[item] + 1) || 1;
      return { ...acc };
    }, {});
  const set = new Set(Object.values(hashMap));
  return set.size === Object.values(hashMap).length;
};

