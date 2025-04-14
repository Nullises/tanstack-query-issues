const sleep = (milliseconds: number): Promise<boolean> => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliseconds);
  });
};

export default sleep;
