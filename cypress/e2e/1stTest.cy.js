//const { it, describe } = require("node:test")

/// <reference types="cypress" />

const { Date } = require("core-js")

describe('Our First Suite',() => {

    it('First test', ()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // search element by tag namenpx
        cy.get('input')

        // Find element by id
        cy.get('#inputEmail1')

        // Find by class name
        cy.get('.input-full-width')

        // Find by attribute name
        cy.get('[placeholder]')

        // Find by attribute name and value
        cy.get('[placeholder="Email"]')

        // Find by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // Find by tag name and attribute with value
        cy.get('input[placeholder="Email"]')

        // Find by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        // Find value by tag name, attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')
    })
    

    it('Second test',() =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="SignInButton"]')

        cy.contains('Sign in')

        cy.contains('[Status="warning"]','Sign in')

        cy.get('#inputEmail3').parents('form').find('button').should('contain','Sign in')
            .parents('form').find('nb-checkbox').click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    })


    it('then and wrap methods',() =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // cypress Style (jquery)

        cy.contains('nb-card', 'Using the Grid').then(firstform=>{
            const emailLabelFirst = firstform.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstform.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondform=>{
                const secondpassowrd = secondform.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal('Password')

                // to convert back to cypress format
                //cy.wrap('secondform').find('[for="exampleInputPassword1"]').should('contain', 'password')
            })

        })

    })


    it.only('invoke command',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
            .should('have.class','label')
            .and('have.text','Email address')


        //2
        cy.get('[for="exampleInputEmail1"]').then(label=>{
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
            expect(label).to.have.text('Email address')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text=>{
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form').find('nb-checkbox').click()
        .find('.custom-checkbox').invoke('attr', 'class')
        //.should('contain', 'checked')
        .then(classvalue=>{
            expect(classvalue).to.contain('checked')
        })
    })


    it('assert property',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()


        const date1 = new Date("04/02/2008");
        date1.setDate(date1.getDate()+5)
        let futureDay = date1.getDate()
        console.log(futureDay)
        let FutureMonth = date1.toLocalestring('default', {month: 'short'})


        cy.contains('nb-card','Common Datepicker').find('input').then(input=>{
            cy.wrap(input).click()

            cy.get('nb-calender-navigation').invoke('attr','ng-reflect-date').then(dateAttribute=>{
                if(!dateAttribute.includes(FutureMonth)){
                    cy.get('[date-name="chevron-right"]').click()
                    cy.get('nb-calendar-day-picker').contains(futureDay).click()
    
                }else{
                    cy.get('nb-calendar-day-picker').contains(futureDay).click()
                }
            })
            //cy.get('nb-calendar-day-picker').contains(futureDay).click()
            //cy.wrap(input).invoke('prop','value').should('contain', 'Aug 2, 2022')
        })

    })


    it('Radio Button',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radiobuttons=>{
            cy.wrap(radiobuttons).first().check({force: true}).should('be.checked')
            cy.wrap(radiobuttons).eq(1).check({force: true})
            cy.wrap(radiobuttons).first().should('not.be.checked')
            cy.wrap(radiobuttons).eq(2).should('be.disabled')
        })

    })

    it('Check boxes',()=>{

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').eq(0).click({force: true})

    })

    it('List and drop downs',()=>{

        cy.visit('/')
        //1
        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')
        // cy.get('nb-layout-header nav').should('have.css','background-color', 'rgb(34, 43, 69)')

        //2
        cy.get('nav nb-select').then(dropdown=>{
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each((listItem, index)=>{
                const ItemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', ItemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color',colors[ItemText])
                if(index<3){
                cy.wrap(dropdown).click()
                }

            })
        })


    })

    it('Web Series',()=>{

        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('tbody').contains('tr','Larry').then(TableRow=>{
            cy.wrap(TableRow).find('.nb-edit').click()
            cy.wrap(TableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(TableRow).find('.nb-checkmark').click()
            cy.wrap(TableRow).find('td').eq(6).should('contain','25')
        })

        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(TableRow=>{
            cy.wrap(TableRow).find('[placeholder="First Name"]').type('Artem')
            cy.wrap(TableRow).find('[placeholder="Last Name"]').type('Bonder')
            cy.wrap(TableRow).find('.nb-checkmark').click()

        })
        cy.get('tbody tr').first().find('td').then(tableColumns =>{
            cy.wrap(tableColumns).eq(2).should('contain','Artem')
            cy.wrap(tableColumns).eq(3).should('contain','Bonder')
        })

        const age = [20,30,40,200]
        cy.wrap(age).each(age=>{
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(TableRow=>{
                if(age==200){
                    cy.wrap(TableRow).should('contain','No data found')
                }else{
                    cy.wrap(TableRow).find('td').eq(6).should('contain',age)
                }
                
            })
        })
        
    })

    it('Tool Tip',()=>{

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card','Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain','This is a tooltip')
    })

    it('dialog box',()=>{
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // //1
        // cy.get('tbody tr').first().find('.nb-trash').click()

        // cy.on('window:confirm',(confirm)=>{
        //     expect(confirm).to.equal('Are you sure you want to delete?')
        // })

        // //2
        // const stub = cy.stub()
        // cy.on('window:confirm',stub)
        // cy.get('tbody tr').first().find('.nb-trash').click().then(()=>{
        //     expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')

        // })

        cy.get('tbody tr').first().find('.nb-trash').click()

        cy.on('window:confirm',() => false)


    })

})