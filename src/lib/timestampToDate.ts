const timestampToDate = (timestamp: string, iso: boolean): Date => {
  const date = iso ? new Date(timestamp) : new Date(parseInt(timestamp, 10) * 1000);

  return date;
};

export default timestampToDate;
