const { Builder, By, Key, until, logging } = require("selenium-webdriver");
const assert = require("assert");
export async function postJobAi() {
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

  console.log("###### Logging in ######");
  console.log("Entering the email");
  await emailInput.sendKeys("cewax41867@oprevolt.com");

  console.log("Entering the password");
  passwordInput.sendKeys("cewax41867@oprevolt.com", Key.RETURN);
  // LOGIN ENDS

  const postJobLink = await driver.wait(
    until.elementLocated(By.css('a[href="/partner/dashboard/post-job"]')),
    10000
  );
  console.log("###### Login Successful ######");
  console.log(`clicking on Post Job  AI link`);
  await postJobLink.click();

  // Step 1 (Add new job)
  const step1Form = await driver.wait(
    until.elementLocated(
      By.xpath("/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div/form")
    ),
    5000
  );
  // JOB TITLE
  const jobTitleInput = await step1Form.findElement(By.name("title"));
  await jobTitleInput.clear();
  console.log(`Entering the job title`);
  await jobTitleInput.sendKeys("Digital Marketing Manager");

  // LEVEL
  const jobLevelInput = await step1Form.findElement(
    By.id("react-select-2-input")
  );
  await jobLevelInput.click();
  console.log(`Selecting the company size`);
  await jobLevelInput.sendKeys("Entry Level", Key.RETURN);

  // LOCATION
  const locationInput = await step1Form.findElement(By.name("location"));
  await locationInput.clear();
  console.log(`Entering the job location`);
  await locationInput.sendKeys("London");

  // EMPLOYMENT TYPE
  const employmentType = await driver.findElement(
    By.xpath('//div[contains(@class, "flex")]/span[text()="Full-Time"]')
  );
  console.log(`Selecting the employment type`);
  await employmentType.click();

  // NEXT BUTTON
  const nextButton = await driver.findElement(
    By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div/form/div[5]/button"
    )
  );
  console.log(`Clicking on the next button`);
  await nextButton.click();

  // SELECT AI METHOD
  const generativeAiButton = await driver.wait(
    until.elementLocated(
      By.xpath("/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]")
    ),
    5000
  );
  console.log(`Selecting the generative AI method`);
  await generativeAiButton.click();

  // NEXT BUTTON
  const nextButton2 = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div[1]/form/div[5]/button[2]"
      )
    ),
    5000
  );
  console.log(`Clicking on the next button`);
  await nextButton2.click();

  // Step 2 (Add Details)
  const step2Form = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/form"
      )
    ),
    5000
  );

  // LANGUAGE
  const languageInput = await step2Form.findElement(
    By.id("react-select-5-input")
  );
  await languageInput.click();
  console.log(`Selecting the language`);
  await languageInput.sendKeys("English", Key.RETURN);

  // PROGRAM OF STUDY
  const programmOfStudyInput = await step2Form.findElement(
    By.id("react-select-6-input")
  );
  await programmOfStudyInput.click();
  console.log(`Selecting the program of study`);
  await programmOfStudyInput.sendKeys("Business and Management", Key.RETURN);

  // DEGREE
  const degreeInput = await step2Form.findElement(
    By.id("react-select-7-input")
  );
  await degreeInput.click();
  console.log(`Selecting the degree`);
  await degreeInput.sendKeys("Bachelors'", Key.RETURN);

  // CGPA
  const cgpaInput = await step2Form.findElement(By.name("cgpa"));
  await cgpaInput.clear();
  console.log(`Entering the cgpa`);
  await cgpaInput.sendKeys("3.5");

  // EXPERIENCE
  const experienceInput = await step2Form.findElement(
    By.id("react-select-8-input")
  );
  await experienceInput.click();
  console.log(`Selecting the experience`);
  await experienceInput.sendKeys("0-2", Key.RETURN);

  // INTERPERSONAL SKILLS
  const interpersonalSkillsInput = await step2Form.findElement(
    By.id("react-select-9-input")
  );
  await interpersonalSkillsInput.click();
  console.log(`Selecting the interpersonal skills`);
  await interpersonalSkillsInput.sendKeys("Leadership", Key.RETURN);

  // SOFTWARE SKILLS
  const softwareSkillsInput = await step2Form.findElement(
    By.id("react-select-10-input")
  );
  await softwareSkillsInput.click();
  console.log(`Selecting the software skills`);
  await softwareSkillsInput.sendKeys("Microsoft Excel", Key.RETURN);

  // SALARY
  const salaryInput = await step2Form.findElement(By.name("salary"));
  await salaryInput.clear();
  console.log(`Entering the salary`);
  await salaryInput.sendKeys("50000");

  // DEADLINE
  const deadlineInput = await step2Form.findElement(By.name("deadline"));
  // await deadlineInput.clear();
  console.log(`Entering the deadline`);
  await deadlineInput.click();
  await deadlineInput.sendKeys("29");
  await deadlineInput.sendKeys("02");
  // click tab
  await deadlineInput.sendKeys(Key.TAB);
  await deadlineInput.sendKeys("2024", Key.RETURN);

  // Step 3 (Benefits & Others)
  const step3Form = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div/div[3]/form"
      )
    ),
    5000
  );
  // YEARLY VACAION DAYS
  const yearlyVacationDaysInput = await step3Form.findElement(
    By.name("yearlyVacation")
  );
  await yearlyVacationDaysInput.clear();
  console.log(`Entering the vacation days`);
  await yearlyVacationDaysInput.sendKeys("15");

  //  YEARLY PAID VACTION DAYS
  const yearlyPaidVacationDaysInput = await step3Form.findElement(
    By.name("paidVacation")
  );
  await yearlyPaidVacationDaysInput.clear();
  console.log(`Entering the paid vacation days`);
  await yearlyPaidVacationDaysInput.sendKeys("10");

  // BENEFITS
  const benefitsInput = await driver.wait(
    until.elementLocated(By.id("react-select-4-input")),
    5000
  );
  await benefitsInput.click();
  console.log(`Selecting the benefits`);
  await benefitsInput.sendKeys("Paid Holidays", Key.RETURN);

  //  YEARLY SICK LEAVE
  const yearlySickLeaveInput = await step3Form.findElement(
    By.name("paidSickLeave")
  );
  await yearlySickLeaveInput.clear();
  console.log(`Entering the sick leave`);
  await yearlySickLeaveInput.sendKeys("5", Key.RETURN);

  console.log("Waiting for the job overview textarea to load");
  // JOB OVERVIEW
  const jobOverviewTextarea = await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[1]/div/div/div[2]/textarea"
      )
    ),
    5000
  );
  let text = "";
  let startTime = Date.now();

  while (text.length <= 200) {
    text = await jobOverviewTextarea.getAttribute("value");

    if (Date.now() - startTime > 5000) {
      // 5000 milliseconds = 5 seconds
      console.log("It's taking more time than usual");
      startTime = Date.now();
    }

    await driver.sleep(1000); // wait for 1 second before checking again
  }

  console.log("JOB OVERVIEW TEXTAREA LOADED");
  // POST JOB
  const postJobButton = await driver.findElement(
    By.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/button[1]"
    )
  );
  console.log(`Clicking on the post job button`);
  await postJobButton.click();

  // SCREENSHOT
  console.log("Attemting to take screenshot");
  const currentTime = new Date().toLocaleString();

  setTimeout(async () => {
    await driver.takeScreenshot().then((data) => {
      let filename = `postJobAi ${currentTime}.png`.replace(/[/:]/g, "-");
      require("fs").writeFileSync(filename, data, "base64");
    });
  }, 5000);
}
