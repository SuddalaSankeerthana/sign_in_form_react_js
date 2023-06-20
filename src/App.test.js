import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("sign in form",()=>{
test("renders form firstname", () => {
    render(<App />);
    const name = screen.getByText("First Name");
    expect(name).toBeInTheDocument();
  });
  
  test("renders form lastname", () => {
    render(<App />);
    const name = screen.getByText("Last Name");
    expect(name).toBeInTheDocument();
  });
  test("render form phone number",()=>{
    render(<App />);
    const phone=screen.getByText("Phone Number")
    expect(phone).toBeInTheDocument();
  })
  test("render form email Id",()=>{
    render(<App />);
    const email=screen.getByText("Email Id")
    expect(email).toBeInTheDocument();
  })
});