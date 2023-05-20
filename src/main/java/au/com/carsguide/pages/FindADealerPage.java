package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import cucumber.api.DataTable;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FindADealerPage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public FindADealerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Find a Dealer']")
    WebElement findADealer;

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Find a Car Dealership Near You']")
    WebElement findADealerText;

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--name']")
    List<WebElement> dealerList;

    @FindBy(xpath = "//span[normalize-space()='Next']")
    WebElement nextButton;


    public void clickOnFindADealer() {
        log.info(("Click on Fina A Dealer"));
        clickOnElement(findADealer);
    }

    public String findACarNavigationText() {
        log.info("Get Actual Text ");
        return getTextFromElement(findADealerText);
    }

    public void listOfDealersName(DataTable dataTable){
        List<List<String>> dealerList = dataTable.asLists(String.class);
        for (List<String> dealerName : dealerList) {
            System.out.println(dealerName);
        }
    }

    public boolean getDealersName(String dealersName) {
        List<WebElement> list = dealerList;
        for (WebElement element : list) {
            if (element.getText().equalsIgnoreCase(dealersName)) {
                return true;
            } else {
                clickOnElement(nextButton);
            }
        }
         return false;
}

      /*  for (int i = 0; i <= 315; i++) {

            List<WebElement> list = dealerList;
            for (WebElement element : list) {
                if (element.getText().equalsIgnoreCase(dealersName)) {
                    return true;
                } else {
                    clickOnElement(nextButton);
                }
            }
        }
        return false;
    }*/
}