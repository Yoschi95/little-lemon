import { render, screen, fireEvent, within } from "@testing-library/react";
import App from './App';

test('Renders the App component, navigate to reservationForm and check time array after initializeTimes', () => {
        
    let arrAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    render(<App />);

    const reservationButton = screen.getByTestId("reservationButton")
    fireEvent.click(reservationButton); // Navigate to reservation page

    const selectTextElement = screen.getByTestId("selectTime")
    
    arrAvailableTimes.forEach((arrAvailableTimes) => {

        expect(within(selectTextElement).getByText(arrAvailableTimes)).toBeInTheDocument();

    });

})


test('Renders the App component, navigate to reservationForm and check time array after updateTimes', () => {
        
    let arrAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    render(<App />);

    const selectTextElement = screen.getByTestId("selectTime");
    fireEvent.change(selectTextElement, { target: { value: "17:00" } }); // select a element, so that the dispatch function gets called
    
    arrAvailableTimes.forEach((arrAvailableTimes) => {

        expect(within(selectTextElement).getByText(arrAvailableTimes)).toBeInTheDocument();

    });

})