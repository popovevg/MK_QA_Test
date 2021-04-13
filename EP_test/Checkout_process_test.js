Feature('Checkout_process');

Scenario('test checkout process with one co-applicant and two authorized users', ({ I }) => {
    I.amOnPage('https://ccos.alpha.mkdecision.com/apply/?store=MkCreditCards&product=cash-rewards-worldcard');  
    I.fillField('#personalAmountCreditRequested','10000');
    I.fillField('#firstName', 'EvgenyTestData');
    I.fillField('#lastName', 'PopovTestData');
    I.fillField('#address1', 'First st');
    I.fillField('#postalCode', '92110');
    I.fillField('#city', 'San Diego');
    I.selectOption('State', 'California');
    I.fillField('#addressYears', '3');
    I.fillField('#addressMonths', '1');
    I.checkOption('insiderOfVendor');
    I.click('Next');

    I.fillField('#birthDate', '01011900');
    I.fillField('#socialSecurityNumber', '111000111');
    I.fillField('citizenships[0]', 'united');
    I.pressKey(['ArrowDown']);
    I.pressKey(['Enter']);
    I.selectOption('#idType', 'U.S. State Issued Identification');
    I.selectOption('#issuedBy', 'California');
    I.fillField('#idValue', '123456');
    I.fillField('#issueDate', '01012010');
    I.fillField('#expireDate', '01012030');
    I.click('Next');

    I.fillField('phoneNumbers[0].contactNumber', '3100000000');
    I.selectOption('phoneNumbers[0].telecomContactMechPurposeId', 'Mobile');
    I.fillField('emailAddress', 'email@gmail.com');
    I.fillField('verifyEmailAddress', 'email@gmail.com');
    I.click('Next');

    I.selectOption('#residenceStatusEnumId', 'Rent');
    I.fillField('#housingPayment', '1500');
    I.fillField('#occupation', 'Occupation');
    I.selectOption('employments[0].employmentStatusEnumId', 'Full-time');
    I.fillField('employments[0].employerName', 'Employer');
    I.fillField('employments[0].title', 'Title');
    I.fillField('employments[0].monthlyIncome', '10000');
    I.fillField('employments[0].years', '3');
    I.fillField('employments[0].months', '3');
    I.fillField('employments[0].address1', 'Address');
    I.fillField('employments[0].postalCode', '92110');
    I.fillField('employments[0].city', 'San Diego');
    I.selectOption('employments[0].state', 'California');
    I.checkOption('jointCredit');

    I.click('//*[@type=\'submit\']');

    I.selectOption('coApplicant.relationToPrimaryApplicant', 'Spouse');
    I.fillField('coApplicant.firstName', 'Name');
    I.fillField('coApplicant.lastName', 'LastName');
    I.fillField('coApplicant.addressYears', '3');
    I.fillField('coApplicant.addressMonths', '3');
    I.checkOption('coApplicant.insiderOfVendor');
    I.click('Next');

    I.fillField('coApplicant.birthDate', '01012000');
    I.fillField('coApplicant.socialSecurityNumber', '111000011');
    I.fillField('citizenships[0]', 'united');
    I.pressKey(['ArrowDown']);
    I.pressKey(['Enter']);   
    I.selectOption('coApplicant.idType', 'U.S. State Issued Identification');
    I.selectOption('coApplicant.issuedBy', 'California');
    I.fillField('coApplicant.idValue', '1234567');
    I.fillField('coApplicant.issueDate', '01012010');
    I.fillField('coApplicant.expireDate', '01012030');
    I.click('Next');

    I.fillField('coApplicant.phoneNumbers[0].contactNumber', '3100000001');
    I.selectOption('coApplicant.phoneNumbers[0].telecomContactMechPurposeId', 'Mobile');
    I.fillField('coApplicant.emailAddress', 'email1@gmail.com');
    I.fillField('coApplicant.verifyEmailAddress', 'email1@gmail.com');
    I.click('Next');

    I.selectOption('coApplicant.residenceStatusEnumId', 'Rent');
    I.fillField('coApplicant.housingPayment', '1500');
    I.fillField('coApplicant.occupation', 'Occupation');
    I.selectOption('coApplicant.employments[0].employmentStatusEnumId', 'Full-time');
    I.fillField('coApplicant.employments[0].employerName', 'Employer');
    I.fillField('coApplicant.employments[0].title', 'Title');
    I.fillField('coApplicant.employments[0].monthlyIncome', '10000');
    I.fillField('coApplicant.employments[0].years', '3');
    I.fillField('coApplicant.employments[0].months', '3');
    I.fillField('coApplicant.employments[0].address1', 'Address');
    I.fillField('coApplicant.employments[0].postalCode', '92110');
    I.fillField('coApplicant.employments[0].city', 'San Diego');
    I.selectOption('coApplicant.employments[0].state', 'California');
    I.checkOption('coApplicant.jointCredit');
    I.click('Next');

    I.click('//span[@class=\'sliderInnerWrapper\']');
    I.selectOption('authorizedUsers[0].relationToPrimaryApplicant', 'Spouse');
    I.fillField('authorizedUsers[0].firstName', 'Name');
    I.fillField('authorizedUsers[0].lastName', 'LastName');
    I.fillField('authorizedUsers[0].birthDate', '01012000');
    I.fillField('authorizedUsers[0].socialSecurityNumber', '111000101');
    I.fillField('authorizedUsers[0].address1', 'Address');
    I.fillField('authorizedUsers[0].postalCode', '92109');
    I.fillField('authorizedUsers[0].city', 'San Diego');
    I.selectOption('authorizedUsers[0].state', 'California');
    I.fillField('authorizedUsers[0].addressYears', '3');
    I.fillField('authorizedUsers[0].addressMonths', '3');
    I.click('Add Authorized User');

    I.selectOption('authorizedUsers[1].relationToPrimaryApplicant', 'Friend');
    I.fillField('authorizedUsers[1].firstName', 'Name');
    I.fillField('authorizedUsers[1].lastName', 'LastName');
    I.fillField('authorizedUsers[1].birthDate', '01012000');
    I.fillField('authorizedUsers[1].socialSecurityNumber', '111000110');
    I.fillField('authorizedUsers[1].address1', 'Address1');
    I.fillField('authorizedUsers[1].postalCode', '92109');
    I.fillField('authorizedUsers[1].city', 'San Diego');
    I.selectOption('authorizedUsers[1].state', 'California');
    I.fillField('authorizedUsers[1].addressYears', '3');
    I.fillField('authorizedUsers[1].addressMonths', '3');
    I.click('Next');

    I.click('Next');

    I.click('Sign and Continue');

    I.click('Sign and Continue');

    I.click('Sign and Submit');

    I.wait(10);

    I.see('Supporting Documents');

});