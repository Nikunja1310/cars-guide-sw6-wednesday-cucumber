package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCarSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());

    public NewAndUsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeMenu;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelsMenu;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationsMenu;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceMenu;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement makeText;


    public void selectMake(String make){
        log.info("Select : " + make + " from make menu string " + makeMenu.toString());
        selectByVisibleTextFromDropDown(makeMenu,make);
    }

    public void selectModel(String model){
        log.info("Select : " + model + " from model menu string " + modelsMenu.toString());
        selectByVisibleTextFromDropDown(modelsMenu,model);
    }

    public void selectLocation(String location) {
        log.info("Select : " + location + " from location menu string " + locationsMenu.toString());
        selectByVisibleTextFromDropDown(locationsMenu, location);
    }

    public void selectPrice(String price) {
        log.info("Select : " + price + " from price menu string " + priceMenu.toString());
        selectByVisibleTextFromDropDown(priceMenu, price);
    }

    public void clickOnFindNextCarTab(){
        log.info("Click on : " + findMyNextCarButton.toString());
        clickOnElement(findMyNextCarButton);
    }

    public String getMakeText() {
        log.info("Return actual Text : " + makeText );
        return getTextFromElement(makeText);
    }



}
