import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import Image from "next/image";

const Modal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const router = useRouter();

  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="modal"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      {showOtp ? (
        <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white py-20 px-28">
          <button onClick={onClose} className="mb-4 self-end">
            <Image src="/icons/iconClose.svg" width={21} height={21} />
          </button>
          <div className="text-2xl font-medium text-textMain">
            SMS-подтверждение
          </div>
          <p className="mt-5 mb-10 text-center text-base font-medium text-coolGray">
            Мы отправили SMS на номер +998 9* *** ** ** Введите 5-значный код
          </p>

          <OtpInput
            containerStyle="otp-container"
            inputStyle="otp-input"
            value={otp}
            onChange={setOtp}
            numInputs={5}
            // disabled={false}
            shouldAutoFocus
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />

          <span className="mt-5">1:59</span>

          <button
            onClick={() => router.push("/business")}
            type="button"
            className="mt-8 w-full cursor-pointer rounded-md  bg-mainColor py-4 text-center text-xl text-white shadow-md hover:opacity-80"
          >
            Подтверждение
          </button>
          <button
            onClick={() => setShowOtp(false)}
            type="button"
            className="mt-8 w-full cursor-pointer rounded-md  border border-indigo-500 bg-white py-4 text-center text-xl text-mainColor shadow-md hover:opacity-80"
          >
            Другой номер телефона
          </button>
        </div>
      ) : (
        <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white px-28 py-20">
          <button onClick={onClose} className="mb-4 self-end">
            <Image src="/icons/iconClose.svg" width={21} height={21} />
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
            onClick={() => setShowOtp(true)}
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
