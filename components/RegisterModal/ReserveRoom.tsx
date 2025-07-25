import React from 'react'

type Props = {
  handleNext: (value: number) => void;
}

const ReserveRoom = ({ handleNext }: Props) => {
  return (
    <div className="text-center mt-6">
      <p className="mb-4">To reserve a room, you need to make a payment of <span className="font-bold">₦219,000</span> and verify your payment.</p>

      <button onClick={() => handleNext(2)} className="w-full py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white mb-4">Make Payment</button>
      <button className="w-full py-2 rounded-md bg-transparent hover:bg-gray-300 text-blue-700 border border-solid border-blue-700">Verify Payment</button>
    </div>
  )
}

export default ReserveRoom;
