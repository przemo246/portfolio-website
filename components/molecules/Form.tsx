import { useState } from "react";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import clsx from "clsx";

type FormData = {
  firstName: string;
  email: string;
  message: string;
};

type Notification = {
  type: "error" | "success";
  message: string;
};

const defaultValues: FormData = {
  firstName: "",
  email: "",
  message: "",
};

const inputSettings = {
  required: true,
  maxLength: 255,
};

export const Form = () => {
  const { register, handleSubmit, resetField } = useForm<FormData>({
    defaultValues,
  });
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setNotification(null);

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

    emailjs.send(serviceID, templateID, data, publicKey).then(
      function () {
        setNotification({
          type: "success",
          message: "Your message was successfully sent",
        });
        setIsLoading(false);
        clearInputs();
      },
      function () {
        setNotification({
          type: "error",
          message: "An error has ocurred. Please try again later.",
        });
        setIsLoading(false);
      }
    );
  });

  const clearInputs = () =>
    (Object.keys(defaultValues) as Array<keyof FormData>).forEach((k) =>
      resetField(k)
    );

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-start flex-col bg-white shadow-5xl p-8 w-1/2 max-lg:w-full"
    >
      <label htmlFor="firstName" className="text-sm uppercase mb-2">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        className="mb-4 p-2 outline-0 placeholder:text-sm w-full border border-gray-200 focus:border-gray-400"
        {...register("firstName", { ...inputSettings })}
        placeholder="Your first name"
      />
      <label htmlFor="email" className="text-sm uppercase mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mb-4 p-2 outline-0 placeholder:text-sm w-full border border-gray-200 focus:border-gray-400"
        {...register("email", { ...inputSettings })}
        placeholder="Your email address"
      />
      <label htmlFor="message" className="text-sm uppercase mb-2">
        Message
      </label>
      <textarea
        className="outline-0 mb-6 p-2 max-h-40 placeholder:text-sm w-full border border-gray-200 focus:border-gray-400 placeholder:text-gray-400"
        id="message"
        {...register("message", { ...inputSettings })}
        maxLength={255}
        placeholder="Your message"
      ></textarea>
      <button
        type="submit"
        className="h-[46px] w-[86px] bg-darkGreen hover:bg-lightGreen transition-all text-white px-[25px] py-2.5 flex items-center justify-center"
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin" color="#fff" />
        ) : (
          "Send"
        )}
      </button>
      {notification && (
        <div className="text-sm mt-2">
          <span
            className={clsx(
              notification.type === "success"
                ? "text-darkGreen"
                : "text-red-600"
            )}
          >
            {notification.message}
          </span>
        </div>
      )}
    </form>
  );
};
