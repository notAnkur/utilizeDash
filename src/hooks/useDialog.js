import { useState } from "react";

export default function useDialog() {
  const [open, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false)
  }

  return { open, onOpen, onClose }
}