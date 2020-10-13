Feature: demoSite


Scenario Outline: create a user on demoSite
	Given we can open demoSite
	When we create a user using "<user>" and "<password>"
	Then demoSite will have generated the user and allows a log in with "<user>" and "<password>"

Examples:
	|	user	|	password	|
	| root	| root			|
	| user2	| u2pwd			|

@ignore
  Scenario: Test out tabledata
    Given that I use the following credentials
    		|		root		|		root		|
    When I interact with the webpage
    Then I should be able to proceed