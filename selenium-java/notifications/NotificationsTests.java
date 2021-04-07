package notifications;

import base.BaseTests;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NotificationsTests extends BaseTests {

    @BeforeEach
    public void launchApp(){
        ChromeOptions options = new ChromeOptions();
        options.setExperimentalOption(
                "prefs",
                Map.of("profile.default_content_setting_values.notifications", 1)
        );
        driver = new ChromeDriver(options);
        driver.get("https://kitchen.applitools.com/ingredients/notification");
    }

    @Test
    public void testNotification() {
        String getNotificationText = """
                const callback = arguments[arguments.length - 1];
                const original_notification = window.Notification;
                window.Notification = function stubNotification(value){
                    const new_notification = new original_notification(value);
                    new_notification.onshow = function(){
                        const notification_text = new_notification.title;
                        window.Notification = original_notification;
                        callback(notification_text);
                    }
                }
                document.getElementById('notification-button').click();
                """;

        var js = (JavascriptExecutor)driver;
        var notification_body = js.executeAsyncScript(getNotificationText);
        assertEquals("There's nothing like a good salad!", notification_body);
    }
}
