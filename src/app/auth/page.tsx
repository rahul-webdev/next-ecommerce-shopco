"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { sendOtp, verifyOtp } from "@/lib/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";

const AuthPage = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { otpSent, isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/profile");
    }
  }, [isLoggedIn, router]);

  const handleSendOtp = () => {
    if (mobile.length < 10) {
      setError("Please enter a valid mobile number");
      return;
    }
    setError("");
    dispatch(sendOtp(mobile));
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
      return;
    }
    setError("");
    // Simulate OTP verification (any 4-digit OTP works for now)
    dispatch(verifyOtp());
    router.push("/profile"); 
  };

  return (
    <main className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <h1 className={cn(integralCF.className, "text-3xl text-center mb-6")}>
          {otpSent ? "Enter OTP" : "Login / Signup"}
        </h1>

        <div className="space-y-4">
          {!otpSent ? (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <InputGroup className="bg-gray-100 border border-gray-200">
                  <InputGroup.Text>
                     <span className="text-gray-500 font-medium">+91</span>
                  </InputGroup.Text>
                  <InputGroup.Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    maxLength={10}
                    className="bg-transparent"
                  />
                </InputGroup>
              </div>
              <Button
                onClick={handleSendOtp}
                className="w-full rounded-full text-base py-6"
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  One Time Password
                </label>
                <InputGroup className="bg-gray-100 border border-gray-200">
                   <InputGroup.Text>
                    <Image
                      src="/icons/check.svg"
                      width={20}
                      height={20}
                      alt="otp"
                      className="opacity-50"
                    />
                  </InputGroup.Text>
                  <InputGroup.Input
                    type="text"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    maxLength={4}
                    className="bg-transparent text-center tracking-widest text-lg"
                  />
                </InputGroup>
                <p className="text-xs text-gray-500 text-center">
                  OTP sent to +91 {mobile}
                </p>
              </div>
              <Button
                onClick={handleVerifyOtp}
                className="w-full rounded-full text-base py-6"
              >
                Verify & Login
              </Button>
              <button
                onClick={() => dispatch({ type: "auth/logout" })} // Reset state manually or add a reset action
                className="w-full text-sm text-gray-500 hover:text-black mt-2"
              >
                Change Mobile Number
              </button>
            </>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md">
              {error}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
