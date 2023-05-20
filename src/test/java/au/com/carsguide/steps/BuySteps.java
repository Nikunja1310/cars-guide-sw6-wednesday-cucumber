package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import au.com.carsguide.pages.UsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class BuySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverToBuyPlusSell();
    }

    @And("^I click <Search Cars> link$")
    public void iClickSearchCarsLink() {
       new HomePage().clickOnSearchCars();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndUsedCarSearchPage().selectMake(make);
    }


    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
    new NewAndUsedCarSearchPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) throws InterruptedException {
        Thread.sleep(1000);
        new NewAndUsedCarSearchPage().selectLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndUsedCarSearchPage().selectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarSearchPage().clickOnFindNextCarTab();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        Assert.assertTrue(new NewAndUsedCarSearchPage().getMakeText().contains(make),"Text not matching");
    }

    @And("^I click ‘Used’ link$")
    public void iClickUsedLink() {
    new HomePage().clickOnUsed();
    }

        @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String expected)  {
    Assert.assertEquals(new UsedCarSearchPage().getTextUsedCarsForSale(),expected,"Actual not matching with Expected");
    }

}