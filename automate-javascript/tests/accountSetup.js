const { Builder, By, Key, until, logging } = require("selenium-webdriver");
const assert = require("assert");
export async function accountSetup() {
  // LOGIN BEGINS
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
  // LOGIN ENDS

  const accountLink = await driver.wait(
    until.elementLocated(By.css('a[href="/partner/dashboard/account"]')),
    5000
  );
  console.log(`clicking on account link`);
  await accountLink.click();

  const jobTitleInput = await driver.wait(
    until.elementLocated(By.name("jobTitle")),
    10000
  );
  await jobTitleInput.clear();
  console.log(`Entering the job title`);
  await jobTitleInput.sendKeys("Software Engineer");

  const logoUploadInput = await driver.findElement(By.id("upload-logo"));
  console.log(`Uploading the logo`);
  await logoUploadInput.sendKeys(
    "C:\\projects\\Driip\\automate\\automate-javascript\\assets\\driip_logo.jpg" // change the location of the image (assets)
  );

  const generalAccountForm = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div[2]/form"
      )
    ),
    5000
  );

  const userNameInput = await generalAccountForm.findElement(
    By.name("username")
  );
  await userNameInput.clear();
  console.log(`Entering the username`);
  await userNameInput.sendKeys("cewax");

  const phoneInput = await generalAccountForm.findElement(By.name("phone"));
  await phoneInput.clear();
  console.log(`Entering the phone number`);
  await phoneInput.sendKeys("1234567890");

  // const profileTabButton = await driver
  //   .findElement(By.css('button:text("Profile")'))
  //   .click();
  let buttons = await driver.findElements(By.tagName("button"));

  // Filter the buttons based on their text
  let profileTabButton;
  for (let button of buttons) {
    if ((await button.getText()) === "Profile") {
      profileTabButton = button;
      break;
    }
  }
  console.log("Clicking on the profile tab");
  await profileTabButton.click();

  const firstNameInput = await driver.findElement(By.name("firstName"));
  await firstNameInput.clear();
  console.log(`Entering the firstName`);
  await firstNameInput.sendKeys("cewax");

  const lastNameInput = await driver.findElement(By.name("lastName"));
  await lastNameInput.clear();
  console.log(`Entering the lastName`);
  await lastNameInput.sendKeys("cewax");

  const genderInput = await driver.findElement(
    By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div[3]/form/div[2]/div[2]/div[1]"
    )
  );
  console.log("Selecting gender");
  genderInput.click();

  const saveButton = await driver.findElement(
    By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div[3]/form/div[3]/button"
    )
  );
  console.log("Clicking on the save button");
  await saveButton.click();

  // after 3 seconds take a screenshot
  const currentTime = new Date().getTime();
  setTimeout(async () => {
    await driver.takeScreenshot().then((data) => {
      require("fs").writeFileSync(`${currentTime}.png`, data, "base64");
    });
  }, 3000);

  driver.quit();
}
