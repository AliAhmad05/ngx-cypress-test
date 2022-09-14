/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

function selectGroupMenuItem(groupName){

    cy.contains('a', groupName).then(menu=>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr=>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })

}

export class NavigationPage{

    FormsLayoutPage(){
        
        //cy.contains('Forms').click()
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    DatePickerPage(){
        //cy.contains('Forms').click()
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()

    }

    AccordionPage(){
        selectGroupMenuItem('Layout')
        cy.contains('Accordion').click()
    }

}

export const NavigateTo = new NavigationPage()
