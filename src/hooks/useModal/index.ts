"use client";

import { useState } from "react";

const useModal = () => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  function close() {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  }

  return { active, visible, setActive, setVisible, close };
};

export default useModal;
