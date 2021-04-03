package tables;

import base.BaseTests;
import com.applitools.eyes.selenium.Eyes;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TableTests extends BaseTests {

    @BeforeAll
    public static void launchApp(){
        driver.get("https://the-kitchen-applitools.netlify.app/ingredients/table");
    }

    @Test
    public void testSortByName_withVisualTesting(){
        var table = driver.findElement(By.id("fruits-vegetables"));
        table.findElement(By.id("column-button-name")).click();

        Eyes eyes = new Eyes();
        eyes.open(driver, "The Kitchen", "sort by name");
        eyes.checkWindow();
        eyes.close();
    }


    @Test
    public void testSortByName_withoutVisualTesting(){
        var table = driver.findElement(By.id("fruits-vegetables"));
        table.findElement(By.id("column-button-name")).click();

        String expectedTableValues = """
                Name
                Type
                Flavor
                Apple Fruit Sweet
                Banana Fruit Sweet
                Carrots Vegetable Sweet
                Lemon Fruit Bitter
                Onion Vegetable Bitter
                Pepper Vegetable Sweet""";

        assertEquals(expectedTableValues, table.getText());
    }
}
