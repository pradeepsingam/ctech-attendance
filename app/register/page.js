'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
    router.push('/payment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: 'auto' }}>
      <input {...register('fullname')} placeholder="Full Name" /><br />
      <input {...register('email')} placeholder="Email" /><br />
      <input {...register('address')} placeholder="Address" /><br />
      <input {...register('mobile')} placeholder="Mobile Number" /><br />
      <input {...register('whatsapp')} placeholder="WhatsApp Number" /><br />
      <input {...register('dob')} type="date" /><br />
      <button type="submit">Next</button>
    </form>
  );
}
