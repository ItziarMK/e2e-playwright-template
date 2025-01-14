export const waitForTimeout = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateRandomString = (length: number): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
