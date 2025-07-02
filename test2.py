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
        WebDriverWait(driver, 20).until(EC.alert_is_present())
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
    time.sleep(30)  # Increased delay to allow actions to be visible

def scroll_page(driver, direction='down', amount=1000):
    if direction == 'down':
        driver.execute_script(f"window.scrollBy(0, {amount});")
    elif direction == 'up':
        driver.execute_script("window.scrollTo(0, 0);")
    print(f"Scrolled {direction}")
    time.sleep(30)  # Increased delay to allow scrolling effects to complete

def test_login():
    driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/login.html')
    print("Navigated to login page")
    
    try:
        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'username')))
        driver.find_element(By.ID, 'username').send_keys('your_username')
        driver.find_element(By.ID, 'password').send_keys('your_password')
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        print("Attempted to log in")

        # Verify login
        WebDriverWait(driver, 40).until(EC.presence_of_element_located((By.ID, 'user-menu')))
        print("Login successful")
    except Exception as e:
        print(f"Login failed: {e}")

def test_signup():
    driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/signin.html')
    print("Navigated to signup page")

    try:
        driver.find_element(By.ID, 'signin-email').send_keys('test@example.com')
        driver.find_element(By.ID, 'signin-username').send_keys('testuser')
        driver.find_element(By.ID, 'signin-password').send_keys('password123')
        driver.find_element(By.ID, 'confirm-password').send_keys('password123')
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        print("Attempted to sign up")

        # Verify redirection to login page
        WebDriverWait(driver, 40).until(EC.url_contains('login.html'))
        print("Signup successful, redirected to login page")
    except Exception as e:
        print(f"Signup failed: {e}")

def test_cart():
    driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/index.html')
    print("Navigated to index page")
    
    try:
        # Add item to cart
        driver.find_element(By.CSS_SELECTOR, '.product-item:first-child .add-to-cart').click()
        print("Attempted to add item to cart")
        handle_alert(driver)

        # Verify item added
        driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/cart.html')
        WebDriverWait(driver, 40).until(EC.presence_of_element_located((By.CLASS_NAME, 'cart-item')))
        print("Item added to cart successfully")

        # Remove item from cart
        driver.find_element(By.ID, 'remove-from-cart-button').click()
        print("Attempted to remove item from cart")

        # Verify item removed
        WebDriverWait(driver, 40).until_not(EC.presence_of_element_located((By.CLASS_NAME, 'cart-item')))
        print("Item removed from cart successfully")
    except Exception as e:
        print(f"Cart functionality test failed: {e}")

def test_wishlist():
    driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/index.html')
    print("Navigated to index page")
    
    try:
        # Add item to wishlist
        driver.find_element(By.CSS_SELECTOR, '.product-item:first-child .add-to-wishlist').click()
        print("Attempted to add item to wishlist")
        handle_alert(driver)

        # Verify item added
        driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/wishlist.html')
        WebDriverWait(driver, 40).until(EC.presence_of_element_located((By.CLASS_NAME, 'wishlist-item')))
        print("Item added to wishlist successfully")

        # Remove item from wishlist
        driver.find_element(By.ID, 'remove-from-wishlist-button').click()
        print("Attempted to remove item from wishlist")

        # Verify item removed
        WebDriverWait(driver, 40).until_not(EC.presence_of_element_located((By.CLASS_NAME, 'wishlist-item')))
        print("Item removed from wishlist successfully")
    except Exception as e:
        print(f"Wishlist functionality test failed: {e}")

def test_logout():
    driver.get('file:///C:/Users/User/OneDrive/Desktop/software%20miniproject/index.html')
    print("Navigated to index page")
    
    try:
        # Logout
        driver.find_element(By.ID, 'user-name').click()
        driver.find_element(By.ID, 'logout-btn').click()
        print("Attempted to log out")

        # Verify logout
        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'login-btn')))
        print("Logout successful")
    except Exception as e:
        print(f"Logout failed: {e}")

# Run test cases
try:
    test_login()
    test_signup()
    test_cart()
    test_wishlist()
    test_logout()
finally:
    # Close the browser
    driver.quit()
