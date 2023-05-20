package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsedCarSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarSearchPage.class.getName());

    public UsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
    WebElement usedCarsForSaleText;

    public String getTextUsedCarsForSale(){
        return getTextFromElement(usedCarsForSaleText);
    }

}
