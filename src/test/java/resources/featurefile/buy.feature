Feature: Search functionality

  @sanity
  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click <Search Cars> link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make      |    model      |      location         |        price    |
      | Audi      |     A6        |     VIC - Northern    |       $80,000   |
      |  AC       |    Cobra      |     QLD - All         |     $100,000    |
      |  Ford     |   FPV         |     ACT - All         |     $100,000    |
      |   Kia     |   Rio         |     NT - All          |     $100,000    |
      | MG        |     3         |     NT - All          |     $100,000    |
      |   Jeep    |    Compass    |     WA - Perth        |     $100,000    |

    @smoke
  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Used’ link
    Then I navigate to "Used Cars For Sale" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make      |    model      |      location         |        price    |
      | Audi      |     A6        |     VIC - Northern    |       $80,000   |
      |  AC       |    Cobra      |     QLD - All         |     $100,000    |
      |  Ford     |   FPV         |     ACT - All         |     $100,000    |
      |   Kia     |   Rio         |     NT - All          |     $100,000    |
      | MG        |     3         |     NT - All          |     $100,000    |
      |   Jeep    |    Compass    |     WA - Perth        |     $100,000    |

