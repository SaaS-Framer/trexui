import React, { useState, createContext, useEffect, useContext } from "react";

const ToastContext = createContext<{
  openToast: React.ReactNode | null;
  handleOpenToast: (toast: React.ReactNode) => void;
}>({
  openToast: null,
  handleOpenToast: () => { }
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [openToast, setOpenToast] = useState<React.ReactNode>(null);

  const handleOpenToast = (toast: React.ReactNode) => {
    setOpenToast(toast);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenToast(null);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [openToast]);
  return (
    <ToastContext.Provider
      value={{
        openToast,
        handleOpenToast
      }}
    >
      {openToast}
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("You forgot to wrap LangProvider");
  }
  return context;
}

