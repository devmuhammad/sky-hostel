"use client";
import { Modal } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";
import { steps } from "./steps";
import { useState } from "react";
import ReserveRoom from "./ReserveRoom";
import MakePayment from "./MakePayment";
import CreateRef from "./CreateRef";

type Props = {
  open: boolean;
  handleClose: () => void;
}

const RegisterModal = ({ open, handleClose }: Props) => {
  const [currentStep, setCurrentStep] = useState(steps[0].id);

  return (
    <Modal show={open} onClose={handleClose} dismissible size="lg">
      <div className="bg-white p-8 rounded-xl relative">
        <button className="absolute top-4 right-4" onClick={handleClose}>
          <IoCloseOutline className="w-6 h-6 text-gray-500" />
        </button>
        <p className="text-2xl font-medium text-center mb-4">{steps.find(step => step.id === currentStep)?.title}</p>
        
        {{
          1: <ReserveRoom handleNext={setCurrentStep} />,
          2: <CreateRef handleNext={setCurrentStep} />,
          3: <MakePayment />,
        }[currentStep]}
      </div>
    </Modal>
  )
}

export default RegisterModal;
