import { render, screen } from "@testing-library/react";
import ReservationForm from './ReservationForm';

test('Renders the ReservationForm text label', () => {
    render(<ReservationForm />);
    const labelElement = screen.getByText("Date");
    expect(labelElement).toBeInTheDocument();
})