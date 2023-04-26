import React, { useEffect, useState } from 'react';
import Image from "next/image";
import OtpInput from "react-otp-input";
import { useSession, signIn, signOut } from "next-auth/react";

function CheckCode({ onClose, phoneNumber }) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState({ open: false, data: "" });

    let timer;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                console.log(error);
                setError({ open: true, data: error.response.data?.error_code });
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

    return (
        <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white py-20 px-28">
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
    )
}

export default React.memo(CheckCode);