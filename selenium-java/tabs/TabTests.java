package tabs;

import base.BaseTests;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TabTests extends BaseTests {

    @Test
    public void testNewTab(){
        driver.get("https://kitchen.applitools.com/ingredients/links");
        driver.findElement(By.id("button-the-kitchen-table")).click();
        driver.getWindowHandles().forEach(tab->driver.switchTo().window(tab));
        assertTrue(driver.findElement(By.id("fruits-vegetables")).isDisplayed());
    }
}
