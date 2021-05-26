package canvas;

import base.BaseTests;
import com.applitools.eyes.selenium.Eyes;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.interactions.Actions;

public class CanvasTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://kitchen.applitools.com/ingredients/canvas");
    }

    @Test
    public void testCanvas() {
        var canvas = driver.findElement(By.id("burger_canvas"));

        //Calculate position canvas button
        var canvas_dimensions = canvas.getSize();
        var canvas_center_x = canvas_dimensions.getWidth() / 2;
        var canvas_center_y = canvas_dimensions.getHeight() / 2;
        int button_x = (canvas_center_x / 3) * 2;
        int button_y = (canvas_center_y / 3) * 2;

        //Click button on the canvas
        new Actions(driver)
            .moveToElement(canvas, button_x, button_y)
            .click()
            .perform();

        //Verify canvas now displays burger
        Eyes eyes = new Eyes();
        eyes.open(driver, "The Kitchen", "burger on canvas");
        eyes.checkElement(canvas);
        eyes.close();
    }

}
