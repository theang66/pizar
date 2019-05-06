from selenium import webdriver
from selenium.webdriver.chrome.options import Options

import time
import csv
import random


url = 'http://pizar.herokuapp.com/'

chrome_options = Options()
chrome_options.binary_location = "/usr/bin/chromium-browser"
driver = webdriver.Chrome(
            options=chrome_options,
            executable_path='/home/kevin/node_modules/chromedriver/lib/chromedriver/chromedriver'
        )

chrome_options.add_argument('--headless')

with open('/home/kevin/Documents/Macalester/Y3S2/Comp225/moviedata.csv', 'w') as file:

    csvwriter = csv.writer(file, delimiter = ',')


    for n in range(0,50):
        choices = []

        driver.get(url)

        time.sleep(1)

        start = driver.find_element_by_class_name('grow')

        start.click()

        for j in range(1,4):


            o = driver.find_elements_by_class_name('dib')

            nextBtn = o[4]

            o = o[:4]

            i = random.choice(o)
            opt = i
            opt.click()
            name = opt.find_element_by_class_name('text-block').text
            choices.append(name)
            time.sleep(.5)

            nextBtn.click()


        time.sleep(1)

        final_text = driver.find_element_by_class_name('dark-red').text

        choices.append(final_text)

        csvwriter.writerow(choices)

        driver.get(url)

driver.close()



