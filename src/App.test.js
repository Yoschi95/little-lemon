import { render, screen, fireEvent, within } from "@testing-library/react";
import App from './App';


test('Renders the App component, navigate to reservationForm and check if Date text is rendered', () => {
        
    render(<App />);

    const reservationButton = screen.getByTestId("reservationButton")
    fireEvent.click(reservationButton); // Navigate to reservation page
    
    const labelElement = screen.getByText("Date");
    expect(labelElement).toBeInTheDocument();

});