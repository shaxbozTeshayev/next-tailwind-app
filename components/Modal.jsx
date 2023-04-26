import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { axiosInstance } from "@/config/config";

const Modal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState({ open: false, data: "" });
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  // const { data: session } = useSession();

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

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
        setError({ open: true, data: "Phone number doesn't exist" });
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

  // check code
  const checkCodeHandler = async () => {
    if (otp.length === 5) {
      try {
        const result = await signIn("credentials", {
          phone_number: "+" + phoneNumber,
          security_code: otp,
          redirect: true,
          callbackUrl: "/",
        });
        console.log(result);
        // const res = await axiosInstance.post("/agent/code_verify/", {
        //   phone_number: "+" + phoneNumber,
        //   security_code: otp
        // });
        // console.log(res);
        // if (res.status === 200)
        //   router.push("/business");
      } catch (error) {
        // console.log(error);
        setError({ open: true, data: "Incomplete" });
        setTimeout(() => {
          setError({ open: false, data: "" });
        }, 3000);
      }
    } else {
      setError({ open: true, data: "The code is incomplete." });
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
        <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white py-20 px-28">
          <button onClick={onClose} className="mb-4 self-end">
            <Image
              src="/icons/iconClose.svg"
              width={21}
              height={21}
              alt="close"
            />
          </button>
          {error?.open && (
            <div className="w-full rounded bg-red-300 p-1 text-center text-xs opacity-90">
              {error?.data}
            </div>
          )}
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

          <span className="mt-5">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </span>

          <button
            onClick={checkCodeHandler}
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
            <Image
              src="/icons/iconClose.svg"
              width={21}
              height={21}
              alt="close"
            />
          </button>
          {error?.open && (
            <div className="w-full rounded bg-red-300 p-1 text-center text-xs opacity-90">
              {error?.data}
            </div>
          )}
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
