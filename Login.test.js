import { render, screen } from "@testing-library/react";  // Import screen from @testing-library/react
import Loginn from "../Loginn";

test('checking component loaded', () => {
  render(<Loginn />);
  expect(screen.queryByText(/login/)).toBeInTheDocument();  // Corrected 'expect' and added 'screen'
});

test('checking email & password inputs are empty',()=>{
    render(<Loginn/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("")
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("")
})