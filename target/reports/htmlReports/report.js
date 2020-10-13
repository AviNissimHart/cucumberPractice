$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demoSite.feature");
formatter.feature({
  "line": 1,
  "name": "demoSite",
  "description": "",
  "id": "demosite",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "create a user on demoSite",
  "description": "",
  "id": "demosite;create-a-user-on-demosite",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "we can open demoSite",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we create a user using \"\u003cuser\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "demoSite will have generated the user and allows a log in with \"\u003cuser\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "demosite;create-a-user-on-demosite;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 10,
      "id": "demosite;create-a-user-on-demosite;;1"
    },
    {
      "cells": [
        "root",
        "root"
      ],
      "line": 11,
      "id": "demosite;create-a-user-on-demosite;;2"
    },
    {
      "cells": [
        "user2",
        "u2pwd"
      ],
      "line": 12,
      "id": "demosite;create-a-user-on-demosite;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2165815100,
  "status": "passed"
});
formatter.before({
  "duration": 2052937100,
  "status": "passed"
});
formatter.before({
  "duration": 2130947700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "create a user on demoSite",
  "description": "",
  "id": "demosite;create-a-user-on-demosite;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "we can open demoSite",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we create a user using \"root\" and \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "demoSite will have generated the user and allows a log in with \"root\" and \"root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "demoSite.we_can_open_demoSite()"
});
formatter.result({
  "duration": 429455900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 24
    },
    {
      "val": "root",
      "offset": 35
    }
  ],
  "location": "demoSite.we_create_a_user_using_and(String,String)"
});
formatter.result({
  "duration": 2568107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 64
    },
    {
      "val": "root",
      "offset": 75
    }
  ],
  "location": "demoSite.demosite_will_have_generated_the_user_and_allows_a_log_in(String,String)"
});
formatter.result({
  "duration": 1758441899,
  "status": "passed"
});
formatter.after({
  "duration": 603421799,
  "status": "passed"
});
formatter.after({
  "duration": 586267799,
  "status": "passed"
});
formatter.after({
  "duration": 646239801,
  "status": "passed"
});
formatter.before({
  "duration": 2105408699,
  "status": "passed"
});
formatter.before({
  "duration": 2118673700,
  "status": "passed"
});
formatter.before({
  "duration": 2069570300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "create a user on demoSite",
  "description": "",
  "id": "demosite;create-a-user-on-demosite;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "we can open demoSite",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we create a user using \"user2\" and \"u2pwd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "demoSite will have generated the user and allows a log in with \"user2\" and \"u2pwd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "demoSite.we_can_open_demoSite()"
});
formatter.result({
  "duration": 289288299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 24
    },
    {
      "val": "u2pwd",
      "offset": 36
    }
  ],
  "location": "demoSite.we_create_a_user_using_and(String,String)"
});
formatter.result({
  "duration": 2475044900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 64
    },
    {
      "val": "u2pwd",
      "offset": 76
    }
  ],
  "location": "demoSite.demosite_will_have_generated_the_user_and_allows_a_log_in(String,String)"
});
formatter.result({
  "duration": 1533830799,
  "status": "passed"
});
formatter.after({
  "duration": 584640199,
  "status": "passed"
});
formatter.after({
  "duration": 592626799,
  "status": "passed"
});
formatter.after({
  "duration": 1692552001,
  "status": "passed"
});
});