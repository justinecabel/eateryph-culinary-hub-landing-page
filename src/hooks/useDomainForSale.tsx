import { useState } from 'react';

export const useDomainForSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    showModal,
    hideModal,
  };
};