package screenshots;

import base.BaseTests;
import com.google.common.io.Files;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

public class ScreenshotTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://the-kitchen-applitools.netlify.app");
    }

    @Test
    public void takeScreenshot(){
        var camera = (TakesScreenshot)driver;
        File screenshot = camera.getScreenshotAs(OutputType.FILE);
        try{
            Files.move(screenshot, new File("resources/images/page.png"));
        }catch(IOException e){
            e.printStackTrace();
        }

    }
}
