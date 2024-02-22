import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException 
import os
import time 

# driver = webdriver.Chrome(r"C:\projects\Driip\automate\chromedriver.exe")
# driver.get("https://dev.driip.world/auth/member/login")
# driver.maximize_window()
# # driver.find_element(By.NAME, "q").send_keys("LinkedIn Login")
# # driver.find_element(By.NAME, "q").send_keys(Keys.ENTER)
# # driver.find_element(By.PARTIAL_LINK_TEXT, "login").click()
# driver.find_element(By.XPATH , "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[1]/div[1]/input").send_keys("cewax41867@oprevolt.com")
# driver.find_element(By.XPATH , "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[2]/div[1]/input").send_keys("cewax41867@oprevolt.com")
# driver.find_element(By.XPATH, "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[3]/button").click()
# # time.sleep(5)

# print(driver.title)
# print(driver.current_url)

# try:

#     element_present = EC.presence_of_element_located((By.XPATH, '/html/body/div/div[1]/div[2]/div[1]/div'))
#     WebDriverWait(driver, 10).until(element_present)


#     print("Login successful.")
#     print("URL after login:", driver.current_url)
# except TimeoutException:
#     print("Login failed or the expected element was not found within the time frame.")

# # Keep the driver open for a defined time
# time.sleep(100)

# driver.quit()

class LoginPageTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(r"C:\projects\Driip\automate\automate-python\chromedriver.exe")
        self.driver.get("https://dev.driip.world/auth/member/login")
        self.driver.maximize_window()

    def test_login(self):
        try:
            driver = self.driver
            driver.find_element(By.XPATH , "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[1]/div[1]/input").send_keys("cewax41867@oprevolt.com")
            driver.find_element(By.XPATH , "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[2]/div[1]/input").send_keys("cewax41867@oprevot.com")
            driver.find_element(By.XPATH, "/html/body/div/div[2]/div/div[2]/div/section[2]/form/div[3]/button").click()
            element_present = EC.presence_of_element_located((By.XPATH, '/html/body/div/div[1]/div[2]/div[1]/div'))
            WebDriverWait(driver, 10).until(element_present)
            print("Login successful.")
            assert True

        except TimeoutException:
           print("Login failed or the expected element was not found within the time frame.")
           screenshot_name = f"screenshot_{time.strftime('%Y%m%d-%H%M%S')}.png"
           screenshot_path = os.path.join(os.getcwd(), screenshot_name)
           driver.save_screenshot(screenshot_path)
           print(f"Screenshot saved as {screenshot_path}")
           assert False

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()