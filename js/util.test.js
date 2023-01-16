const { generateText } = require("./util");

test("Should output name and age", () => {
  const text = generateText("Konrad", 26);
  expect(text).toBe("Konrad (26 years old)");
});
