import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { axiosInstance } from "@/config/config";
import CheckCode from "./CheckCode";
import "react-phone-input-2/lib/style.css";

const Modal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState({ open: false, data: "" });

  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();

  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  // check phone number
  const checkPhoneNumberHandler = async () => {
    if (phoneNumber?.length === 12) {
      try {
        const res = await axiosInstance.post("/agent/send_verification_code/", {
          phone_number: "+" + phoneNumber,
        });
        if (res.status === 200) setShowOtp(true);
      } catch (error) {
        console.log(error);
        setError({ open: true, data: error.response?.data?.phone_number });
        setTimeout(() => {
          setError({ open: false, data: "" });
        }, 3000);
      }
    } else {
      setError({
        open: true,
        data: "The phone number was entered incorrectly.",
      });
      setTimeout(() => {
        setError({ open: false, data: "" });
      }, 3000);
    }
  };

  if (!visible) return null;
  return (
    <div
      id="modal"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      {showOtp ? (
        <CheckCode onClose={onClose} phoneNumber={phoneNumber} />
      ) : (
        <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white px-28 py-20">
          {error?.open && (
            <div className="w-full rounded bg-red-300 p-1 text-center text-xs opacity-90">
              {error?.data}
            </div>
          )}
          <button onClick={onClose} className="mb-4 self-end">
            <Image
              src="/icons/iconClose.svg"
              width={21}
              height={21}
              alt="close"
            />
          </button>

          <div className="text-2xl font-medium text-textMain">
            Введите свой номер телефона
          </div>
          <p className="mt-5 mb-10 text-center text-base font-medium text-coolGray">
            Для входа в личный кабинет введите свой номер телефона
          </p>

          <PhoneInput
            country={"uz"}
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          <button
            onClick={checkPhoneNumberHandler}
            type="button"
            className="mt-16 w-full cursor-pointer rounded-md  bg-mainColor py-4 text-center text-xl text-white shadow-md hover:opacity-80"
          >
            Отправка
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
