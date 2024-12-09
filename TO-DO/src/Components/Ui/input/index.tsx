import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

interface InputProps {
  htmlFor: string;
  text: string;
  type: string;
  id: string;
  name: string;
  bg: string;
  divcss: string;
  onChange: any;
  register: any;
  err?: string;
  onBlur: any;
  isDisable: boolean;
  iconOne:any;
  iconTwo : any;
}

const Input: React.FC<InputProps> = ({
  htmlFor,
  onBlur,
  text,
  type,
  id,
  name,
  bg,
  err,
  register,
  divcss,
  isDisable,
  iconOne,
  iconTwo
}) => {
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (

    <div className={`mb-2 text-sm ${divcss}`}>
      <label className="text-sm" htmlFor={htmlFor}>
        {text}
      </label>
      <div className="relative">
        <input
          {...register(name, { onBlur: onBlur })}
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          id={id}
          name={name}
          className={`${bg} float-left block text-lg w-full p-2 pr-10  border-t-0 border-l-0 border-r-0 border-b-1 focus:outline-none focus:ring-0 shadow-sm border focus:border-indigo-600`}
          onBlur={(e) => {
            onBlur(e.target.value);
          }}
          disabled={isDisable}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-3 top-8 transform -translate-y-1/2"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
             <div>{iconOne}</div> 
            ) : (
              <div>{iconTwo}</div> 
            )}
          </button>
        )}
      </div>
      {err && (
        <p className="text-left text-red-700 text-xs">{err}</p>
      )}
    </div>
  );
};

export default Input;
