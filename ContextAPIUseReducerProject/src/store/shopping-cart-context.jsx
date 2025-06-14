import { createContext } from 'react';

export const CartContext = createContext({
    // Note: Defining an object structure here doesn't do anything other than give you autocomplete when
    // using CartContext in the code elsewhere in the project.
    items: [],
    addItemToCart: () => {}
});