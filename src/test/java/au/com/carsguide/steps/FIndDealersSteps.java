package au.com.carsguide.steps;

import au.com.carsguide.pages.FindADealerPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class FIndDealersSteps {
    @And("^I click Find a Dealer$")
    public void iClickFindADealer() {
        new FindADealerPage().clickOnFindADealer();
    }

    @Then("^I navigate to car-dealers page$")
    public void iNavigateToCarDealersPage() {
        String expected = "Find a Car Dealership Near You";
        Assert.assertEquals(new FindADealerPage().findACarNavigationText(),expected,"Actual not matching with Expected");
    }

    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealersName) {
    new FindADealerPage().getDealersName(dealersName);
    }

}
