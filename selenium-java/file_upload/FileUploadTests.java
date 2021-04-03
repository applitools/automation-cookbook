package file_upload;

import base.BaseTests;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class FileUploadTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://the-kitchen-applitools.netlify.app/ingredients/file-picker");
    }

    @Test
    public void testFileUpload() {
        String filePath = "/Users/angie/workspace/recipes/resources/images/mac-n-cheese.jpg";
        driver.findElement(By.id("photo-upload")).sendKeys(filePath);
    }
}
