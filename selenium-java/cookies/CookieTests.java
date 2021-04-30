package cookies;

import base.BaseTests;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Cookie;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class CookieTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://kitchen.applitools.com/ingredients/cookie");
    }

    @Test
    public void testGetCookie(){
        Cookie cookie = driver.manage().getCookieNamed("protein");
        assertEquals("chicken", cookie.getValue());
    }

    @Test
    public void testAddCookie(){
        Cookie cookie = new Cookie("fruit", "apple");
        driver.manage().addCookie(cookie);
        assertEquals(
                cookie.getValue(),
                driver.manage().getCookieNamed(cookie.getName()).getValue());
    }

    @Test
    public void testEditCookie(){
        Cookie originalCookie = new Cookie("fruit", "apple");
        driver.manage().addCookie(originalCookie);

        Cookie editedCookie = new Cookie(originalCookie.getName(), "mango");
        driver.manage().addCookie(editedCookie);

        assertEquals(
                editedCookie.getValue(),
                driver.manage().getCookieNamed(originalCookie.getName()).getValue()
        );

    }

    @Test
    public void testDeleteCookie(){
        Cookie cookie = new Cookie("fruit", "mango");
        driver.manage().addCookie(cookie);
        driver.manage().deleteCookie(cookie);
        assertNull(driver.manage().getCookieNamed(cookie.getName()));
    }

    @Test
    public void testingKeys(){
        Cookie cookie = new Cookie("fruit", "apple");
        driver.manage().addCookie(cookie);
    }

    @Test
    public void testingKeysa(){
        Cookie cookie = new Cookie("fruit", "mango");
        driver.manage.addCookie(cookie);
    }
}
