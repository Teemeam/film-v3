export const getOriginalWidth = (data: Size[]): number | undefined => {
  for (const obj of data) {
    if (obj.label === 'Original') {
      return obj.width;
    }
  }
  return undefined; // Return undefined if no object with label "Original" is found
};

export const getOriginalHeight = (data: Size[]): number | undefined => {
  for (const obj of data) {
    if (obj.label === 'Original') {
      return obj.height;
    }
  }
  return undefined; // Return undefined if no object with label "Original" is found
};
