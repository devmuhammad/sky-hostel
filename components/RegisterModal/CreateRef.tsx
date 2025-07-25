import { useState } from 'react'
import Input from '../Input';

type Props = {
  handleNext: (value: number) => void;
}

const CreateRef = ({ handleNext }: Props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    matricNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4 mt-6">
      <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
      <Input label="Email" name="email" value={form.email} onChange={handleChange} required />
      <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} required />
      <Input label="Matric No" name="matricNo" value={form.matricNo} onChange={handleChange} required />

      <button onClick={() => handleNext(3)} className="w-4/5 mx-auto bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md block mt-4">Generate Reference Number</button>
    </div>
  )
}

export default CreateRef;
