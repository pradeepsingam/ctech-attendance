'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PaymentPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) setFormData(JSON.parse(data));
  }, []);

  const handleBankDeposit = async () => {
    if (!formData) return;

    await axios.post('/api/submit', {
      ...formData,
      method: 'bank',
      paid: false,
    });

    alert('Form submitted. Wait for admin to confirm payment.');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Select Payment Method</h2>

      <button
        onClick={() => {
          alert('Redirect to PayHere — coming soon!');
        }}
      >
        Pay with PayHere
      </button>

      <hr />

      <div>
        <h3>Bank Deposit</h3>
        <p>Account Number: 1234567890</p>
        <button onClick={handleBankDeposit}>Submit with Bank Deposit</button>
      </div>
    </div>
  );
}
