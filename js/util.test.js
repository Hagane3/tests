const puppeteer = require("puppeteer");
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

test("Should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["---window-size=1920, 1080"],
  });
  const page = await browser.newPage();
  await page.goto("file:///A:/LEARNING/tests/js/index.html");
  await page.click("input#name");
  await page.type("input#name", "Konrad");
  await page.click("input#age");
  await page.type("input#age", "26");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Konrad (26 years old)");
}, 10000);
