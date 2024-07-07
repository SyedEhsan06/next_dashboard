"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Hourglass } from "react-loader-spinner";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="relative btn bg-[#405d93] text-white rounded-lg w-32 h-14 p-2 active:bg-[#2c4065] active:shadow-none active:scale-95 focus:outline-none"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
      {pending ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-opacity-80"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)", 
          }}
        >
          <Hourglass
            visible={true}
            height={80}
            width={80}
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            color="#306cce"
          />
        </div>
      ) : null}
    </>
  );
}
