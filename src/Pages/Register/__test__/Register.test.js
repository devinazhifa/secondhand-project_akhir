import { render, screen, fireEvent } from '@testing-library/react'
import {createRoot} from 'react-dom/client';
import Register from '../Register'

test('register input name field typed', () => {
    const inputElement = screen.getByTestId('register-input-name-field')
    const root = createRoot(inputElement)
    root.render(<Register />)
    fireEvent.change(inputElement, {
        target: {
            value: 'Sekar Arum K'
        }
    })
    expect(inputElement.value).toBe('Sekar Arum K')
})


// test('register input button clicked', () => {
//     render(<Register />)
//     const inputElement = screen.getByTestId('register-input-name-field')
//     const buttonElement = screen.getByTestId('register-input-button')
//     // ketik di field
//     fireEvent.change(inputElement, {
//         target: {
//             value: 'Sekar Arum K'
//         }
//     })
//     // klik button
//     fireEvent.click(buttonElement)
//     expect(inputElement.value).toBeFalsy()
  
// })