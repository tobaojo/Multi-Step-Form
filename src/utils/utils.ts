export const getpriceValue = (priceStr: string) => {
  if (priceStr) {
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }
  return 0;
};

export const addTextToValue = (priceNum: number, monthly: boolean) => {
  if (!priceNum) {
    return `n/a`;
  } else {
    return monthly ? `+$${priceNum}/mo` : `+${priceNum}/yr`;
  }

};
