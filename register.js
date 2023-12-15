import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
  };

  return (
    <div className='contenedor blank-page'>
      <Form onSubmit={handleSubmit} className='container-sm'>
        <h2>Sign Up</h2>

        <Form.Label className='texto'>User:</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          placeholder="Create a user"
          onChange={handleChange}
        />
        <br />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='texto'>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter an Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>
        <br />

        <Form.Label className='texto'>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter a password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <br />

        <Form.Label className='texto'>Choose your role</Form.Label>
        <DropdownButton id="dropdown-basic-button" title={selectedRole ? selectedRole : 'CHOOSE A ROLL'}>
          <Dropdown.Item onClick={() => handleRoleSelect('Solicitante')}>Solicitante</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRoleSelect('Aprobador')}>Aprobador</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRoleSelect('PMO')}>PMO</Dropdown.Item>
        </DropdownButton>

        <br />
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
