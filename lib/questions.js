// questions array that will be used to prompt inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text that will appear on your SVG (No more than 3 characters)',
        // Prevents the user from moving on to the next question until their entry contains no more than 3 characters
        validate: async(input) => {
            if (input.length > 3) {
                return 'Please enter no more than 3 characters'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a text colour'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColour',
        message: 'Enter a shape colour'
    },
]

module.exports = questions