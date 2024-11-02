const dateToLocaleString = (date: Date): string => {
  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
  };

  return date.toLocaleDateString('en-US', options);
};

export default dateToLocaleString;
