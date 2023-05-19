const axios = require('axios');
const { render, screen, fireEvent, waitFor } = require('@testing-library/react');
const CreateForm = require('./CreateForm');


jest.mock('axios');

describe('CreateForm', () => {
  test('should update tourist profile', async () => {
    const mockEmail = 'test@example.com';
    const mockNewTourist = {
      name: 'John Doe',
      nic: '123456789',
      email: mockEmail,
      phone: '1234567890',
      password: 'password123',
    };

    axios.put.mockResolvedValueOnce();

    render(<CreateForm title="Update tourist profile" paramemail={mockEmail} />);

    const nameInput = screen.getByLabelText('Name');
    const nicInput = screen.getByLabelText('NIC');
    const phoneInput = screen.getByLabelText('Phone');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('New Password');
    const rePasswordInput = screen.getByLabelText('Re-enter Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: mockNewTourist.name } });
    fireEvent.change(nicInput, { target: { value: mockNewTourist.nic } });
    fireEvent.change(phoneInput, { target: { value: mockNewTourist.phone } });
    fireEvent.change(emailInput, { target: { value: mockNewTourist.email } });
    fireEvent.change(passwordInput, { target: { value: mockNewTourist.password } });
    fireEvent.change(rePasswordInput, { target: { value: mockNewTourist.password } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        `https://spsh-travel-planner-backend.onrender.com/tourist/update/${mockEmail}`,
        {
          name: mockNewTourist.name,
          nic: mockNewTourist.nic,
          email: mockNewTourist.email,
          phone: mockNewTourist.phone,
          password: mockNewTourist.password,
        }
      );
      expect(window.location.replace).toHaveBeenCalledWith('/tourist');
    });
  });
});
