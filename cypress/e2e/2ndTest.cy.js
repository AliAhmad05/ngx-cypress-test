/// <reference types="cypress" />
//const { Content } = require("@angular/compiler/src/render3/r3_ast")
const { onNavigationPage, NavigateTo } = require("../support/page_objects/navigationPage")

describe('Logout from the default account', () => {

    it('profile -> Log out', () => {
        cy.get('[class="user-picture image ng-star-inserted"]').click()
        cy.get('[class="menu-title"]',).contains('Log out').click()
    })

})

describe('Register New Account', () => {

    it.only('Auth -> Register',()=>{
        NavigateTo.AuthPage()

    })

})

/**
 * ! Go to layouts and click on Accordion and then toggle it
 */

describe('Toggle accordion by button', () => {

    it('Layout -> Accordion', () => {
        /**
         * info: automated the process for visiting the layout->Accordion
         * cy.visit('/')
         * cy.contains('Layout').click()
         * cy.contains('Accordion').click()
         */
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