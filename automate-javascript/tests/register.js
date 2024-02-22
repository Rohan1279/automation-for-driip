const { Builder, By, Key, until, logging } = require("selenium-webdriver");
const assert = require("assert");
export async function register() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://dev.driip.world/auth/member/register");
  const email = "asd@asd.com";
  const name = "asd";
  const password = "asdasd";
  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[1]/div[1]/input"
      )
    )
    .sendKeys(email);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[2]/div[1]/input"
      )
    )
    .sendKeys(name);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[3]/div[1]/input"
      )
    )
    .sendKeys(password);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[4]/div[1]/input"
      )
    )
    .sendKeys(password);
}
