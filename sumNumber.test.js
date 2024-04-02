const { sumNumber } = require("./sumNumber");

// Skenario 1 : Jika kedua parameter bernilai 2 dan 3, fungsi sumNumber harus mengembalikan 5
test("adds 2 + 3 to equal 5", () => {
  expect(sumNumber(2, 3)).toBe(5);
});

// Skenarion 2 : Jika kedua parameter bernilai -1 dan -2, fungsi sumNumber harus mengembalikan -3
test("adds -1 + -2 to equal -3", () => {
  expect(sumNumber(-1, -2)).toBe(-3);
});

// Skenario 3 : Jika kedua parameter bernilai 0 dan 0, fungsi sumNumber harus mengembalikan 0
test("adds 0 + 0 to equal 0", () => {
  expect(sumNumber(0, 0)).toBe(0);
})
