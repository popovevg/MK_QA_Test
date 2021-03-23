const form = require("./form.js");
const data = require("./data.js");

Feature("Submit App-flow");
/********************
 Business Appflow 
 ********************/
if (data.runBusinessTest) {
  data.cards.business.forEach(function (product) {
    Scenario(product, (I) => {
      let randBusiness = Math.floor(Math.random() * data.organizations.length);
      let randPerson = Math.floor(Math.random() * data.people.length);
      let business = data.organizations[randBusiness];
      let people = data.people[randPerson];
      let businessClass = "";
      if (product === "Company Rewards Charge Card") {
        businessClass = "officers";
      } else {
        businessClass = "principals";
      }

      I.amOnPage("/business/");
      I.wait(2);
      I.see("Let's find the right card for your business");
      I.see("Please select a statement that applies to your business:");
      I.click("None of the statements apply to my business");
      I.click("Continue");
      I.wait(2);
      I.click(product);
      I.wait(2);
      I.see(product, "h1");
      I.click("Apply Now");
      I.see("Let's find the right card for your business");
      I.see("Please select a statement that applies to your business:");
      I.click("None of the statements apply to my business");
      I.click("Continue");
      I.wait(2);
      return
    })
})
}