// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../../utils/api';

// function RegisterPage() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/register', form);
//       alert('Registered Successfully');
//       navigate('/login'); // ✅ redirect to login
//     } catch (err) {
//       alert('Registration Failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input
//         className="form-control my-2"
//         placeholder="Name"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//         required
//       />
//       <input
//         className="form-control my-2"
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         required
//       />
//       <input
//         className="form-control my-2"
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//         required
//       />
//       <button className="btn btn-primary">Register</button>
//     </form>
//   );
// }

// export default RegisterPage;


























import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../utils/api';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      toast.success('Registered Successfully');
      navigate('/login');
    } catch (err) {
      toast.error('Registration Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        className="form-control my-2"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="form-control my-2"
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="form-control my-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegisterPage;
