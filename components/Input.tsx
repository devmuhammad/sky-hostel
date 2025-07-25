import React from "react";

type Props = {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input = ({ label, name, type, placeholder, value, onChange, required }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="inline-block mb-2text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 rounded-md border border-solid border-gray-300"
      />
    </div>
  );
};

export default Input;
