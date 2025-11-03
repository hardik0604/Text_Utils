import React, { useState } from 'react';
import Swal from 'sweetalert2';

import '../App.css';

export default function TextForm() {
  const [searchText, setSearchText] = useState('Enter Text Here');
  const handleUppercase = () => {
    const upperText = searchText.toUpperCase();
    setSearchText(upperText);
  };
  const handleLowercase = () => {
    const lowerText = searchText.toLowerCase();
    setSearchText(lowerText); 
  };
  const handleClear = () => {
    setSearchText('');
  };
  const copyText = () => {
    if (!searchText) {
      Swal.fire({
        icon: 'warning',
        title: 'Empty Field',
        text: 'Please enter text to copy.',
      });
      return;
    }

    navigator.clipboard.writeText(searchText)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Text copied to clipboard.',
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to copy text.',
        });
      });
  };



  return (
    <div>
      <div className="my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Text
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}

          rows={8}
          
        />
      </div>
      <div className="container my-3">
        <div className="d-flex justify-content-center flex-wrap">
          <button className="btn btn-primary my-1 mx-2" onClick={handleUppercase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleLowercase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-primary my-1 mx-2" onClick={copyText}>
            Copy Text
          </button>
        </div>
      </div>
    </div>
  )
}
