const { generateText, checkAndGenerate, validateInput } = require("./util");

test("Should output name and age", () => {
  const text = generateText("Konrad", 26);
  expect(text).toBe("Konrad (26 years old)");
});

test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Konrad", 26);
  expect(text).toBe("Konrad (26 years old)");
});

test("Should return validation boolean", () => {
  const value = validateInput("Konrad", true, false);
  expect(value).toBe(true);
});
