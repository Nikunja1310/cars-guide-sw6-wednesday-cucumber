package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement topMenu;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;


    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement used;



    public void mouseHoverToBuyPlusSell() {
        log.info("Mouse hover " + topMenu.toString());
        mouseHoverToElement(topMenu);
    }

    public void clickOnSearchCars(){
        log.info("click Search Cars link" + searchCars.toString());
    clickOnElement(searchCars);
    }

    //Second Scenario

    public void clickOnUsed(){
        clickOnElement(used);
    }

}