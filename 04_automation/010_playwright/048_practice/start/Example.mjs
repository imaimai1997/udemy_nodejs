import { chromium } from "@playwright/test";

/**
 * 練習問題
 * [佐藤]で検索して、一番最後に出てくる人物の名前を取得してください。
 */
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const inputLocator = page.locator("//*[@id=\"__next\"]/div/div[1]/label/input");
  await page.waitForTimeout(2000);
  await inputLocator.type('佐藤');

  const nameLocator = await page.locator(".cards.list-group-item >> nth=-1");
  const searchName = await nameLocator.innerText();

  console.log(searchName)

  await browser.close();

})();
