/// <reference types="cypress" />

const { onNavigationPage, NavigateTo } = require("../support/page_objects/navigationPage")
const credentials = {
    'Full Name': 'Ali Ahmad',
    'Email Address': 'aliaurangzaib03@gmail.com',
    'Password': 'testing123'
}

// info: Logout from the default account

describe('Logout from the default account', () => {

    it('profile -> Log out', () => {
        cy.get('[class="user-picture image ng-star-inserted"]').click()
        cy.get('[class="menu-title"]',).contains('Log out').click()
    })

})

// info: Register new account

describe('Register New Account', () => {

    it('Auth -> Register', () => {
        NavigateTo.AuthPage()
        cy.get('[placeholder="Full name"]').type(credentials["Full Name"])
        cy.get('[placeholder="Email address"]').type(credentials["Email Address"])
        cy.get('[placeholder="Password"]').type(credentials.Password)
        cy.get('[placeholder="Confirm Password"]').type(credentials.Password)
        cy.get('[class="custom-checkbox"]').click()

        //Todo: Complete this code from here
        //Error: Fix this
        //cy.contains('_ngcontent-wih-c22','Register')
    })

})

// info: Go to layouts and click on Accordion and then toggle it & Verifying it


describe('Toggle accordion by button', () => {
    
    it('Layout -> Accordion', () => {

        cy.visit('/')

         // comment: automated the process for visiting the layout->Accordion
         //cy.visit('/')
         //cy.contains('Layout').click()
         //cy.contains('Accordion').click()
    
        NavigateTo.AccordionPage()
        cy.contains('Toggle First Item').click()
        //cy.wait(3000)
        //cy.contains('Toggle First Item').click()
    })

    it('Verifying the content of the Toggle Item', () => {
        const content = "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."

        //cy.get('[class="item-body"]').parent('[class="ng-tns-c23-24 ng-trigger ng-trigger-accordionItemBody"]').should('contain', content)
        cy.get('[class="ng-tns-c23-24 ng-trigger ng-trigger-accordionItemBody"]').parents('nb-accordion-item').should('contain', content)

    })

})