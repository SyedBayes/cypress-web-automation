/// <reference types="Cypress" />

describe('Automation Practice', function () {
    it('Complete Checkout Process', function () {
        // Verify Home Page
        cy.visit("https://automationexercise.com/");
        cy.get(".col-sm-6 h1 span").should("include.text", "Automation");
        cy.log("Homepage is verified");

        // Add Product to Cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-title').should("have.text", "Added!");
        cy.get('u').click();

        // Verify Cart Page
        cy.get('.active').should("have.text", "Shopping Cart");

        // Proceed to Checkout
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.modal-body > :nth-child(2) > a > u').click();

        // Fill Signup Form
        cy.get('[data-qa="signup-name"]').type("Bayes");
        const randomEmail = `${Math.floor(Math.random() * 100)}@yahoo.com`; // Generate random email
        cy.get('[data-qa="signup-email"]').type(randomEmail);
        cy.get('[data-qa="signup-button"]').click();

        // Fill Personal Information
        cy.get('[data-qa="password"]').type("asddfsdfsdgffr@#$12SAS")
        cy.get('#days').select('23').should("include.text", "23")
        cy.get('#months').select('July').should("include.text", "July")
        cy.get('#years').select('1998').should("include.text", "1998")
        cy.get('#first_name').type("Syed Bayes");
        cy.get('#last_name').type("Iqbal");
        cy.get('[data-qa="company"]').type("openhaus");
        cy.get('[data-qa="address"]').type("Wireless, Mohakhali");
        cy.get('[data-qa="address2"]').type("Habiganj, Sylhet");
        cy.get('[data-qa="country"]').select("United States");
        cy.get('[data-qa="state"]').type("Dhaka");
        cy.get('[data-qa="city"]').type("Dhaka");
        cy.get('[data-qa="zipcode"]').type("1200");
        cy.get('[data-qa="mobile_number"]').type("01700000000");
        cy.get('[data-qa="create-account"]').click();

        // Verify Account Creation
        cy.get('[data-qa="account-created"]').should("have.text", "Account Created!");
        cy.get('[data-qa="continue-button"]').click();

        // Verify Logged-in User
        cy.get(':nth-child(10) > a').should("include.text", "Logged in as Bayes");

        // Navigate to Cart
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

        // Proceed to Checkout from Cart
        cy.get('.col-sm-6 > .btn').click();

        // Verify Address Details and Review Order
        cy.get(':nth-child(2) > .heading').should("have.text", "Address Details");
        cy.get(':nth-child(4) > .heading').should("have.text", "Review Your Order");

        //Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('Please deliver it as soon as possible')
        cy.get(':nth-child(7) > .btn').click()

        //Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get('[data-qa="name-on-card"]').type('Bayes')
        cy.get('[data-qa="card-number"]').type('123456789')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('08')
        cy.get('[data-qa="expiry-year"]').type('2027')

        //Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click()

        //Verify the success message 'Your order has been placed successfully!'
        cy.get('.col-sm-9 > p').should("have.text","Congratulations! Your order has been confirmed!")

    });
});