@ignore
Feature: googleTest

	Scenario: find kitten images on google
		Given we can open google
		When we search for kittens
		Then google will return us images of kitten