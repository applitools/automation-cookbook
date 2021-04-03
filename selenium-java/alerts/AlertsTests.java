package alerts;

import base.BaseTests;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

public class AlertsTests extends BaseTests {
    @BeforeEach
    public void launchApp(){
        driver.get("https://the-kitchen-applitools.netlify.app/ingredients/alert");
    }

    @Test
    public void testAlerts(){
        driver.findElement(By.id("alert-button")).click();
        Alert alert = driver.switchTo().alert();
        alert.getText();
        alert.accept();

        driver.findElement(By.id("confirm-button")).click();
        alert = driver.switchTo().alert();
        alert.dismiss();

        driver.findElement(By.id("prompt-button")).click();
        alert = driver.switchTo().alert();
        alert.sendKeys("nachos");
        alert.accept();
    }
}
