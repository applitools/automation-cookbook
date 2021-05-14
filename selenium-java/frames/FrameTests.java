package frames;

import base.BaseTests;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class FrameTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://kitchen.applitools.com/ingredients/iframe");
    }

    @Test
    public void testIframe(){
        driver.switchTo().frame("the-kitchen-table");
        driver.findElement(By.id("column-button-name")).click();
        driver.switchTo().parentFrame();
    }

}
