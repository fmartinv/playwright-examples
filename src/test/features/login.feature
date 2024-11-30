Feature: User autentication test
TODO: Implemet Error logging Scenario Outline

  Background:
    Given User navigates to the application

  Scenario Outline: Login with valid credentials
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    When User clicks on the login button
    Then User is logged in successfully

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |

Scenario Outline: Login width invalid credentials  
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    When User clicks on the login button
    Then Login should fail 

    Examples:
      | username           | password     |
      | locked_out_user    | secret_sauce |
      | problem_user       | 12345        |