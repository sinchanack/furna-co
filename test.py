from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Initialize the Chrome WebDriver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

def handle_alert(driver):
    try:
        WebDriverWait(driver, 10).until(EC.alert_is_present())
        alert = driver.switch_to.alert
        alert.accept()
        print("Handled alert")
    except:
        print("No alert found")

def click_button_and_wait(driver, button_selector, button_description):
    button = WebDriverWait(driver, 40).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, button_selector))
    )
    button.click()
    print(f"Clicked {button_description}")
    time.sleep(5)  # Short delay to allow actions to be visible

def scroll_page(driver, direction='down', amount=1000):
    if direction == 'down':
        driver.execute_script(f"window.scrollBy(0, {amount});")
    elif direction == 'up':
        driver.execute_script("window.scrollTo(0, 0);")
    print(f"Scrolled {direction}")
    time.sleep(5)  # Delay to allow scrolling effects to complete

def add_first_product_to_cart_and_wishlist(driver):
    try:
        # Find the first product's "Add to Cart" button and click it
        add_to_cart_button = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, '.product-item:first-child .add-to-cart'))
        )
        add_to_cart_button.click()
        print("Added first product to cart")
        handle_alert(driver)
        time.sleep(5)  # Delay to allow the cart action to complete

        # Find the first product's "Add to Wishlist" button and click it
        add_to_wishlist_button = WebDriverWait(driver, 30).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, '.product-item:first-child .add-to-wishlist'))
        )
        add_to_wishlist_button.click()
        print("Added first product to wishlist")
        handle_alert(driver)
        time.sleep(5)  # Delay to allow the wishlist action to complete

    except Exception as e:
        print(f"An error occurred while adding product to cart/wishlist: {e}")

# Open the webpage
driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/index.html')  # Adjust the path as needed

try:
    # Click the Furniture button
    click_button_and_wait(driver, '#furniture-btn', 'Furniture button')

    # Scroll down to ensure all products are visible and fully loaded
    scroll_page(driver, 'down')
    
    # Scroll back up to ensure all elements like cart and wishlist buttons are visible
    scroll_page(driver, 'up')

    # Add the first product to the cart and wishlist
    add_first_product_to_cart_and_wishlist(driver)

    # Ensure the cart and wishlist buttons are visible after scrolling up
    click_button_and_wait(driver, '#show-cart', 'Show Cart')
    
    # Optionally, verify the cart contents
    cart_contents = driver.find_element(By.CSS_SELECTOR, '#cart-contents').text
    print(f"Cart contents: {cart_contents}")
    time.sleep(5)  # Delay to view the cart

    click_button_and_wait(driver, '#show-wishlist', 'Show Wishlist')

    # Optionally, verify the wishlist contents
    wishlist_contents = driver.find_element(By.CSS_SELECTOR, '#wishlist-contents').text
    print(f"Wishlist contents: {wishlist_contents}")
    time.sleep(5)  # Delay for final actions

    print("Test completed successfully")

except Exception as e:
    print("An error occurred:", e)

finally:
    # Close the browser
    driver.quit()
