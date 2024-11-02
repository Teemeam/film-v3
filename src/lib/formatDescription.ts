const formatDescription = (description: string) => {
  const split: string[] = description.split('\n');
  const filter: string[] = split.filter((row) => row.includes('Film') || row.includes('Camera'));

  return {
    film: filter[0] && filter[0].includes('Film') ? filter[0].split('Film: ').pop() : undefined,
    camera:
      filter[1] && filter[1].includes('Camera') ? filter[1].split('Camera: ').pop() : undefined,
  };
};

export default formatDescription;
