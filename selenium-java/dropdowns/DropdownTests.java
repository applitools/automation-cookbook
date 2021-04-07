package dropdowns;

import base.BaseTests;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DropdownTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://kitchen.applitools.com/ingredients/select");
    }

    @Test
    public void selectSingleOption() {
        Select dropdown = new Select(driver.findElement(By.id("spices-select-single")));
        String option = "ginger";
        dropdown.selectByValue(option);

        var selectedOptions = dropdown.getAllSelectedOptions();
        assertEquals(1, selectedOptions.size());
        assertEquals(option, selectedOptions.get(0).getAttribute("value"));
    }


    @Test
    public void selectMultipleOptions() {
        Select dropdown = new Select(driver.findElement(By.id("spices-select-multi")));
        var options = List.of("ginger", "chili-powder");
        options.forEach(dropdown::selectByValue);

        var selectedOptions = dropdown.getAllSelectedOptions();
        assertEquals(options.size(), selectedOptions.size());
        assertTrue(
                selectedOptions
                .stream()
                .map(e->e.getAttribute("value"))
                .collect(Collectors.toList())
                .containsAll(options)
        );
    }
}
