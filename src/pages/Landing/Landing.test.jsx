/* eslint-disable no-undef */
import LandingPageContent from './LandingPageContent'
import { render, screen } from '@testing-library/react'

describe('Landing Page Test', () => {
    it('the title is visible', () => {
        render(<LandingPageContent />)
        expect(screen.getByText(/PersonifyPro Analytics/i)).toBeInTheDocument()
    })

    it('the subtitle is visible', () => {
        render(<LandingPageContent />)
        expect(screen.getByText(/Analytics Portal for Business Managers/i)).toBeInTheDocument()
    })
})