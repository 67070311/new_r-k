"use client";

import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  UserRound,
  X,
} from "lucide-react";

type EmailPopupProps = {
  open: boolean;
  onClose: () => void;
};

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const initialFormData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function EmailPopup({ open, onClose }: EmailPopupProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "loading") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose, status]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof ContactFormData;
    const value = event.target.value;

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "กรุณากรอกชื่อ";
    }

    if (!phone) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
      newErrors.phone = "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง";
    }

    if (!email) {
      newErrors.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!message) {
      newErrors.message = "กรุณากรอกข้อความ";
    } else if (message.length > 3000) {
      newErrors.message = "ข้อความต้องไม่เกิน 3,000 ตัวอักษร";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "ไม่พบ Web3Forms Access Key กรุณาตรวจสอบไฟล์ .env.local",
      );
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "มีผู้สอบถามข้อมูลจากเว็บไซต์ R&K Technology GPS",
          from_name: "เว็บไซต์ R&K Technology GPS",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          botcheck: "",
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ?? "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
        );
      }

      setStatus("success");
      setStatusMessage("ส่งข้อมูลเรียบร้อยแล้ว");
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      );
    }
  };

  const handleClose = () => {
    if (status === "loading") return;

    setErrors({});
    setStatus("idle");
    setStatusMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/55 px-3 py-4 backdrop-blur-[3px] sm:px-5 sm:py-6"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 26,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative my-auto w-full max-w-[360px] overflow-hidden rounded-[22px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:max-w-[500px] sm:rounded-[28px]"
          >
            <div className="h-[5px] w-full bg-[#F97316] sm:h-[7px]" />

            <button
              type="button"
              onClick={handleClose}
              disabled={status === "loading"}
              aria-label="ปิดหน้าต่างติดต่อ"
              className="absolute right-3 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F4F5] text-black transition duration-200 hover:rotate-90 hover:bg-[#F97316] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:right-5 sm:top-6 sm:h-10 sm:w-10"
            >
              <X
                size={17}
                strokeWidth={2.2}
                className="sm:h-[21px] sm:w-[21px]"
              />
            </button>

            <div className="max-h-[calc(100dvh-32px)] overflow-y-auto px-5 pb-6 pt-6 sm:max-h-[calc(100dvh-48px)] sm:px-9 sm:pb-9 sm:pt-9">
              {status === "success" ? (
                <SuccessContent onClose={handleClose} />
              ) : (
                <>
                  <PopupHeader />

                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-4 sm:mt-7"
                    noValidate
                  >
                    <FormField
                      id="contact-name"
                      name="name"
                      label="ชื่อ / Name"
                      placeholder="กรอกชื่อของคุณ"
                      value={formData.name}
                      error={errors.name}
                      icon={<UserRound size={19} strokeWidth={1.9} />}
                      onChange={handleChange}
                      autoComplete="name"
                    />

                    <FormField
                      id="contact-phone"
                      name="phone"
                      label="เบอร์โทรศัพท์ / Telephone"
                      placeholder="เช่น 086-300-4117"
                      value={formData.phone}
                      error={errors.phone}
                      icon={<Phone size={19} strokeWidth={1.9} />}
                      onChange={handleChange}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                    />

                    <FormField
                      id="contact-email"
                      name="email"
                      label="อีเมล / Email"
                      placeholder="example@email.com"
                      value={formData.email}
                      error={errors.email}
                      icon={<Mail size={19} strokeWidth={1.9} />}
                      onChange={handleChange}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                    />

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block text-[13px] font-medium text-black/70 sm:text-[14px]"
                      >
                        ข้อความ / Message{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div
                        className={`flex items-start rounded-[14px] border bg-[#FAFAFA] transition focus-within:bg-white ${
                          errors.message
                            ? "border-red-400 focus-within:border-red-500"
                            : "border-black/10 focus-within:border-[#F97316]"
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#F97316]">
                          <MessageSquareText size={19} strokeWidth={1.9} />
                        </div>

                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          maxLength={3000}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="กรอกรายละเอียดที่ต้องการสอบถาม"
                          className="min-h-[105px] min-w-0 flex-1 resize-none bg-transparent pb-3 pr-4 pt-3.5 text-[14px] leading-6 text-black outline-none placeholder:text-black/30 sm:min-h-[120px] sm:text-[15px]"
                        />
                      </div>

                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-[11px] text-red-500 sm:text-[12px]">
                          {errors.message ?? ""}
                        </p>

                        <p className="text-[10px] text-black/35 sm:text-[11px]">
                          {formData.message.length}/3000
                        </p>
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {status === "error" && (
                      <div
                        role="alert"
                        className="rounded-[13px] border border-red-200 bg-red-50 px-4 py-3 text-center text-[12px] leading-5 text-red-600 sm:text-[13px]"
                      >
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative flex h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F97316] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(249,115,22,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EA680F] hover:shadow-[0_14px_30px_rgba(249,115,22,0.32)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:mt-2 sm:h-[56px] sm:gap-3 sm:text-[17px]"
                    >
                      {status !== "loading" && (
                        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-700 group-hover:left-[130%]" />
                      )}

                      {status === "loading" ? (
                        <>
                          <LoaderCircle
                            size={19}
                            className="relative z-10 animate-spin sm:h-[22px] sm:w-[22px]"
                          />

                          <span className="relative z-10">
                            กำลังส่งข้อมูล...
                          </span>
                        </>
                      ) : (
                        <>
                          <Send
                            size={18}
                            strokeWidth={2}
                            className="relative z-10 sm:h-[21px] sm:w-[21px]"
                          />

                          <span className="relative z-10">ส่งข้อมูล</span>
                        </>
                      )}
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={status === "loading"}
                    className="mx-auto mt-3 block text-[12px] font-medium text-black/45 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-40 sm:mt-4 sm:text-[14px]"
                  >
                    ปิดหน้าต่าง
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PopupHeader() {
  return (
    <div className="text-center">
      <div className="relative mx-auto flex h-[58px] w-[58px] items-center justify-center sm:h-[76px] sm:w-[76px]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#F97316]/10" />

        <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#F97316] text-white shadow-[0_12px_28px_rgba(249,115,22,0.25)] sm:h-[68px] sm:w-[68px]">
          <Mail size={25} strokeWidth={2} className="sm:h-[32px] sm:w-[32px]" />
        </div>
      </div>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F97316] sm:mt-5 sm:text-[12px] sm:tracking-[0.2em]">
        Contact Form
      </p>

      <h2 className="mt-1.5 text-[21px] font-bold leading-tight text-black sm:mt-2 sm:text-[28px]">
        สอบถามข้อมูลเพิ่มเติม
      </h2>

      <p className="mx-auto mt-2 max-w-[330px] text-[12px] leading-5 text-black/55 sm:mt-3 sm:text-[15px] sm:leading-6">
        กรุณากรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
      </p>
    </div>
  );
}

type SuccessContentProps = {
  onClose: () => void;
};

function SuccessContent({ onClose }: SuccessContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-8 text-center sm:py-12"
    >
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ECFDF3] text-[#16A34A] sm:h-[88px] sm:w-[88px]">
        <CheckCircle2
          size={36}
          strokeWidth={1.8}
          className="sm:h-[44px] sm:w-[44px]"
        />
      </div>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16A34A] sm:text-[12px]">
        Message Sent
      </p>

      <h2 className="mt-2 text-[23px] font-bold text-black sm:text-[30px]">
        ส่งข้อมูลเรียบร้อยแล้ว
      </h2>

      <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-6 text-black/55 sm:text-[15px]">
        ทีมงานได้รับข้อมูลของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-7 flex h-[48px] w-full items-center justify-center rounded-full bg-[#F97316] text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(249,115,22,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EA680F] sm:h-[56px] sm:text-[17px]"
      >
        ปิดหน้าต่าง
      </button>
    </motion.div>
  );
}

type FormFieldProps = {
  id: string;
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  icon: ReactNode;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: "text" | "tel" | "email";
  inputMode?: "text" | "tel" | "email";
  autoComplete?: string;
};

function FormField({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  icon,
  onChange,
  type = "text",
  inputMode = "text",
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-medium text-black/70 sm:text-[14px]"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={`flex items-center rounded-[14px] border bg-[#FAFAFA] transition focus-within:bg-white ${
          error
            ? "border-red-400 focus-within:border-red-500"
            : "border-black/10 focus-within:border-[#F97316]"
        }`}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#F97316]">
          {icon}
        </div>

        <input
          id={id}
          name={name}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-12 min-w-0 flex-1 bg-transparent pr-4 text-[14px] text-black outline-none placeholder:text-black/30 sm:text-[15px]"
        />
      </div>

      {error && (
        <p className="mt-1 text-[11px] text-red-500 sm:text-[12px]">{error}</p>
      )}
    </div>
  );
}
