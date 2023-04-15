import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Modal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnClose = (e) => {
    if (e.target.id === "modal") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="modal"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      {/* <div className="flex flex-col items-center rounded-lg bg-white py-20 px-32">
        <div className="text-2xl font-medium text-textMain">
          Введите свой номер телефона
        </div>
        <p className="mt-5 mb-10 text-base font-medium text-coolGray">
          Для входа в личный кабинет введите свой номер телефона
        </p>

        <PhoneInput
          country={"uz"}
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <button
          type="button"
          className="mt-16 w-full cursor-pointer rounded-md  bg-mainColor py-4 text-center text-xl text-white shadow-md hover:opacity-80"
        >
          Отправка
        </button>
      </div> */}

      <div className="flex flex-col items-center rounded-lg bg-white py-20 px-32">
        <div className="text-2xl font-medium text-textMain">
          SMS-подтверждение
        </div>
        <p className="mt-5 mb-10 text-base font-medium text-coolGray">
          Мы отправили SMS на номер +998 9* *** ** ** Введите 5-значный код
        </p>

        <PhoneInput
          country={"uz"}
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <button
          type="button"
          className="mt-16 w-full cursor-pointer rounded-md  bg-mainColor py-4 text-center text-xl text-white shadow-md hover:opacity-80"
        >
          Отправка
        </button>
      </div>
    </div>
  );
};

export default Modal;
