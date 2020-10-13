package cuke;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/cuke",
// normally would be a glue link as well
// but due to package structure here its not needed
plugin = {"pretty", "html:target/reports/htmlReports",
			"json:target/reports/json/demositereport.json", "junit:target/reports/xml/xmlReports"},
monochrome = true,
tags = {"~@ignore"}
)
public class testRunner {

}
