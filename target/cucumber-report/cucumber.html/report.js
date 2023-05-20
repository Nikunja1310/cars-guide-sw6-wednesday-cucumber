$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A6",
        "VIC - Northern",
        "$80,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "AC",
        "Cobra",
        "QLD - All",
        "$100,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Ford",
        "FPV",
        "ACT - All",
        "$100,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "NT - All",
        "$100,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "MG",
        "3",
        "NT - All",
        "$100,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "WA - Perth",
        "$100,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26646840200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - Northern\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 85193700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 192386400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2342498200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 119948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A6",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 143914100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Northern",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1082084400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 61094800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 10034521500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 33043200,
  "status": "passed"
});
formatter.after({
  "duration": 655684500,
  "status": "passed"
});
formatter.before({
  "duration": 17209509200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"AC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Cobra\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"AC\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 143880200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 77211000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AC",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1627141300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cobra",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 108821900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1070894900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 60744500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1719947600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AC",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40078115900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027listing-search-title\u0027]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c53a72d115405727a442aa0b7a3a1a6c, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\nikss\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57452}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57452/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c53a72d115405727a442aa0b7a3a1a6c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.getMakeText(NewAndUsedCarSearchPage.java:70)\r\n\tat au.com.carsguide.steps.BuySteps.iShouldSeeTheMakeInResults(BuySteps.java:63)\r\n\tat ✽.Then I should see the make \"AC\" in results(buy.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 792267300,
  "status": "passed"
});
formatter.before({
  "duration": 12974894300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"FPV\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 147295400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 82684100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1839098600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FPV",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 114641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1074077600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 63632200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1931459600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 47884400,
  "error_message": "java.lang.AssertionError: Text not matching expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat au.com.carsguide.steps.BuySteps.iShouldSeeTheMakeInResults(BuySteps.java:63)\r\n\tat ✽.Then I should see the make \"Ford\" in results(buy.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 708343900,
  "status": "passed"
});
formatter.before({
  "duration": 28136941000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Rio\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 157082200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 78917300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2150306400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 73213100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1073924300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 60556000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2500737400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 31037400,
  "status": "passed"
});
formatter.after({
  "duration": 628834200,
  "status": "passed"
});
formatter.before({
  "duration": 17886563100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"MG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"MG\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 153067700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1824683200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 119656000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 131358200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1077509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 58698100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1784499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40086970700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027listing-search-title\u0027]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [395e918f0d16b40c104df108e550ffd5, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\nikss\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58481}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58481/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 395e918f0d16b40c104df108e550ffd5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.getMakeText(NewAndUsedCarSearchPage.java:70)\r\n\tat au.com.carsguide.steps.BuySteps.iShouldSeeTheMakeInResults(BuySteps.java:63)\r\n\tat ✽.Then I should see the make \"MG\" in results(buy.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 769260500,
  "status": "passed"
});
formatter.before({
  "duration": 16046223000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u003cSearch Cars\u003e link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Compass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 158278400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 77493400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 47400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1712726900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 67061800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 1066117800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 54108400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2127570000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 649862800,
  "status": "passed"
});
formatter.after({
  "duration": 649258000,
  "status": "passed"
});
});