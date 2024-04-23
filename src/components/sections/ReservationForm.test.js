import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from './ReservationForm';

test('Renders the ReservationForm text label', () => {
    render(<ReservationForm />);
    const labelElement = screen.getByText("Date");
    expect(labelElement).toBeInTheDocument();
})

test('Renders the ReservationForm and check the first value of availableTimes', () => {
    
    let arrAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    
    render(<ReservationForm availableTimes={arrAvailableTimes}/>);

    const selectTextElement = screen.getByTestId("selectTime")
    fireEvent.change(selectTextElement, { target: { value: "17:00" } });
    expect(selectTextElement.value).toBe("17:00");
})