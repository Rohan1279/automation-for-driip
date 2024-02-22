const { Builder, By, Key, until, logging } = require("selenium-webdriver");
const assert = require("assert");
export async function companyProfileSetup() {
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

  const companyLink = await driver.wait(
    until.elementLocated(
      By.css('a[href="/partner/dashboard/company-overview"]')
    ),
    5000
  );
  console.log(`clicking on company link`);
  await companyLink.click();

  const companyForm = await driver.wait(
    until.elementLocated(
      By.xpath("/html/body/div/div[1]/div[2]/div[2]/div/div/div/form")
    ),
    5000
  );

  const logoUploadInput = await companyForm.findElement(By.id("upload-logo"));
  console.log(`Uploading company logo`);
  await logoUploadInput.sendKeys(
    "C:\\projects\\Driip\\automate\\automate-javascript\\assets\\driip_logo.jpg" // change the location of the image (assets)
  );

  const foundingYearInput = await companyForm.findElement(
    By.name("foundingYear")
  );
  await foundingYearInput.clear();
  console.log(`Entering the founding year`);
  await foundingYearInput.sendKeys("2021");

  const companyOverviewInput = await companyForm.findElement(
    By.name("overview")
  );
  await companyOverviewInput.clear();
  console.log(`Entering the company overview`);
  await companyOverviewInput.sendKeys(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  );

  const headOfficeInput = await companyForm.findElement(By.name("headOffice"));
  await headOfficeInput.clear();
  console.log(`Entering the head office`);
  await headOfficeInput.sendKeys("Canada");

  const companySizeInput = await companyForm.findElement(
    By.id("react-select-3-input")
  );
  await companySizeInput.click();
  console.log(`Selecting the company size`);
  await companySizeInput.sendKeys("1-10", Key.RETURN);

  const industryType = await companyForm.findElement(
    By.id("react-select-2-input")
  );
  await industryType.click();
  console.log(`Selecting the industry type`);
  await industryType.sendKeys("Software", Key.RETURN);

  const benefits = await companyForm.findElement(By.id("react-select-4-input"));
  await benefits.click();
  console.log(`Selecting the benefits`);
  await benefits.sendKeys("Paid Holidays", Key.RETURN);
  // await driver.wait(until.elementLocated(By.id("react-select-4-input")), 5000);
  // await benefits.click();
  // await benefits.sendKeys("Work From Home", Key.RETURN);
  // await benefits.click();
  // await benefits.sendKeys("Flexible Work Schedule", Key.RETURN);
  // await benefits.click();
  // await benefits.sendKeys("Performance Bonus", Key.RETURN);

  // submit the companyForm
  let buttons = await driver.findElements(By.tagName("button"));

  // Filter the buttons based on their text
  let profileTabButton;
  for (let button of buttons) {
    if ((await button.getText()) === "Save") {
      profileTabButton = button;
      break;
    }
  }
  console.log("Clicking on the save button");
  await profileTabButton.click();
  const currentTime = new Date().toLocaleString();

  console.log("Attemting to take screenshot");
  setTimeout(async () => {
    await driver.takeScreenshot().then((data) => {
      let filename = `companyProfileSetup ${currentTime}.png`.replace(
        /[/:]/g,
        "-"
      );
      require("fs").writeFileSync(filename, data, "base64");
    });
  }, 5000);
  // const logs = await driver.manage().logs().get(logging.Type.BROWSER);
  // logs.forEach((log) => {
  //   console.log(`[${log.level.name}] ${log.message}`);
  // });
}
