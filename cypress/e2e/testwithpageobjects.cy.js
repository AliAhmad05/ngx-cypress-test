const { onNavigationPage, NavigateTo } = require("../support/page_objects/navigationPage")

describe('Test with page objects',()=>{

    beforeEach('open application',()=>{

        cy.visit('/')
    })

    it('verify navigation across the pages',()=>{

        NavigateTo.FormsLayoutPage()
        NavigateTo.DatePickerPage()
        NavigateTo.AccordionPage()
        //NavigateTo.AccordionPage()
    })

})