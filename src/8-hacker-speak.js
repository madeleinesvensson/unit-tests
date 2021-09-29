export const hackerSpeak = (words) => {
  const hackerCypher = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
  };
  return words.replace(/[aAeEiIoOsS]/g, (match) => hackerCypher[match]);
};
