//BUGET CONTROLLER
const budgetController = (() => {

    const Expense = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };

    return {
        addItem: (type, des, val) => {
            let newItem, ID;

            ID = 0;

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            data.allItems[type].push(newItem)
            console.log(data)
        }
    }

})();

//UI CONTROLLER
const UIController = (() => {

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: () => {
            return DOMstrings;
        }
    }

})();

//GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

    const setupEventLiseners = () => {

        const DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', e => {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }

    const ctrlAddItem = () => {

        // 1. Get the filed input data

        let input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        //5. Display the budget on the UI

    }

    return {
        init: () => {
            setupEventLiseners();
        }
    }

})(budgetController, UIController)

controller.init();