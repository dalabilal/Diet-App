import { Camera } from 'phosphor-react';
import React from 'react';
import './inputFile.css';

/**
 * @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label? : string
 * }
 * } props 
 */
const InputFile = props => {
  const { imagename,label, ...inputProps } = props;
  
  return (
    <div className="inputFile-group">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            <input {...inputProps}  />
            <Camera size={32} weight="fill" className="Camera"/>
          </label>) : null
      }
      <span className="image-name">{imagename}</span>
    
    </div>
  );
};

export default InputFile;