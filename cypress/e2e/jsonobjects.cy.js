/// <reference types="cypress" />

const credentials = { 'Full Name': 'Ali Ahmad','Email Address': 'aliaurangzaib03@gmail.com','Password':'testing123' }

describe('Json Objects',()=>{

    it('Json Objects',()=>{
        //cy.openHomePage()

        
        const simpleobject = {"key": "value","key2": "value2","key3": "value3"}

        const simpleArrayofValues = ["one", "two", "three"]

        const ArrayofObjects = [{"key": "value"},{"key2": "value2"},{"key3": "value3"}]

        const typesofData = { "string": "Hi, My name is Ali", "number": 5 }

        const mix = {
            "First Name": "Ali",
            "Last Name": "Ahmad",
            "Age": 25,
            "Students":[
                {
                    "firstName": "Sara",
                    "lastName": "Jokovic"
                },
                {
                    "firstName": "Shumaa",
                    "lastName": "Nide"
                }

            ]
        }

        console.log(simpleobject.key2)
        console.log(simpleobject["key2"])
        console.log(simpleArrayofValues[1])
        console.log(ArrayofObjects[2].key3)
        console.log(mix.Students[1].firstName)
    })


})