export const getOriginalWidth = (data: Size[]): number | undefined => {
  for (const obj of data) {
    if (obj.label === 'Large') {
      // Starting May 15 2025 "Large" is used instead of "Original"
      return obj.width;
    }
  }

  return undefined; // Return undefined if no object with label "Large" is found
};

export const getOriginalHeight = (data: Size[]): number | undefined => {
  for (const obj of data) {
    if (obj.label === 'Large') {
      // Starting May 15 2025 "Large" is used instead of "Original"
      return obj.height;
    }
  }

  return undefined; // Return undefined if no object with label "Large" is found
};
