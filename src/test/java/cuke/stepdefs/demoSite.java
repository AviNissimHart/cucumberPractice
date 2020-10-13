package cuke.stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class demoSite {

	private static WebDriver driver;
	private static WebElement targ;
	@Before
	public void init(){
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
	}
	
	@Given("^we can open demoSite$")
	public void we_can_open_demoSite() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://thedemosite.co.uk/");
		System.out.println("demoSite website accessed");
	}

	@When("^we create a user using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void we_create_a_user_using_and(String arg1, String arg2) throws Throwable {
	   System.out.println(arg1 + " " + arg2);
	   
	   targ = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
	   targ.click();
	   System.out.println("Add user clicked");
	   Thread.sleep(1000);
	   
	   targ = driver.findElement(By.name("username"));
	   targ.sendKeys(arg1);
	   targ = driver.findElement(By.name("password"));
	   targ.sendKeys(arg2);
	   targ = driver.findElement(By.name("FormsButton2"));
	   targ.click();
	   System.out.println("User made");
	   Thread.sleep(1000);
	   
	}

	@Then("^demoSite will have generated the user and allows a log in with \\\"([^\\\"]*)\\\" and \\\"([^\\\"]*)\\\"$")
	public void demosite_will_have_generated_the_user_and_allows_a_log_in(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		targ = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
		targ.click();
		System.out.println("login clicked");
		Thread.sleep(1000);
		targ = driver.findElement(By.name("username"));
		   targ.sendKeys(arg1);
		   targ = driver.findElement(By.name("password"));
		   targ.sendKeys(arg2);
		   targ = driver.findElement(By.name("FormsButton2"));
		   targ.click();
		   System.out.println("Login clicked");
		   targ = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b"));
	       assertEquals("**Successful Login**", targ.getText());
	       System.out.println("Login successful");

	}
	
	@After
    public void tearDown() {
        driver.close();
        driver.quit();
    }
	
}
