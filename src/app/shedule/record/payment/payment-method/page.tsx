import React from 'react';
import Layout from '@/widgets/Layout/Layout';
import PaymentMethodPage from '@/pages/PaymentMethodPage/ui/PaymentMethodPage';


export default function PaymentMethod() {
  return (
    <Layout type='login'>
      <main className='container pt-[60px] pb-[120px]'>
        <h1 className='font-keetanoKB text-2xl font-bold mb-20 text-black'>СПОСОБЫ ОПЛАТЫ</h1>
        <PaymentMethodPage />
      </main>
    </Layout>
  )
}
