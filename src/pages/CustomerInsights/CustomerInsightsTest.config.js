/* eslint-disable no-undef */
import ChatbotInsights from './ChatbotInsights'
import { render } from '@testing-library/react'

describe('Chatbot Insights Test', () => {
    it('the title is visible', () => {
        render(<ChatbotInsights />)
        expect(screen.getByText(/Chatbot Insights/i)).toBeInTheDocument()
    })
})

//     it('should increment count on click', async () => {
//         render(<App />)
//         userEvent.click(screen.getByRole('button'))
//         expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
//     })

//     it('uses flexbox in app header', async () => {
//         render(<App />)
//         const element = screen.getByRole('banner')
//         expect(element.className).toEqual('App-header')
//         expect(getComputedStyle(element).display).toEqual('flex')
//     })
// })
