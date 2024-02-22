const { Builder, By, Key, until, logging } = require("selenium-webdriver");
const assert = require("assert");
async function login() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://dev.driip.world/auth/member/login");

  await driver.manage().window().maximize();

  const form = await driver.wait(
    until.elementLocated(
      By.xpath("/html/body/div/div[2]/div/div[2]/div/section[2]/form")
    ),
    5000
  );
  const emailInput = await form.findElement(By.name("email"));
  const passwordInput = await form.findElement(By.name("password"));

  console.log("Entering the email");
  await emailInput.sendKeys("cewax41867@oprevolt.com");

  console.log("Entering the password");
  passwordInput.sendKeys("cewax41867@oprevolt.com", Key.RETURN);

  // await driver.manage().setTimeouts({ implicit: 10000 });
  // console.log("Current URL: " + (await driver.getCurrentUrl()));
  // const pageTitle = await driver.getTitle();
  // console.log("Page title: " + pageTitle);
  // await driver.quit();
  const logs = await driver.manage().logs().get(logging.Type.BROWSER);
  logs.forEach((log) => {
    console.log(`[${log.level.name}] ${log.message}`);
  });
}
login();
