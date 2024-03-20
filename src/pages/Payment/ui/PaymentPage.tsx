import PaymentList from '@/entities/PaymentList/ui/PaymentList'
import React from 'react'

const data = [
  {id: 1, typeOfPurchase: 'Единоразовый проход',price: 5000, quantity: 0},
  {id: 2, typeOfPurchase: '10 посещений',price: 40000, quantity: 0},
  {id: 3, typeOfPurchase: '20 посещений',price: 90000, quantity: 0},
  {id: 4, typeOfPurchase: '50 посещений',price: 200000, quantity: 0},
]

export default function PaymentPage() {
  return (
    <section>
      <PaymentList 
        data={data}
      />
    </section>
  )
}
