import Image from 'next/image';
import React, { HtmlHTMLAttributes, useState } from 'react';

type ViewCondition = {
  resistence: boolean;
  toxicant: boolean;
};

export function useView() {
  const [viewCondition, setView] = useState<ViewCondition>({ resistence: false, toxicant: false });

  const handleView = (checked: boolean, title: string) => {
    setView((prevCondition) => {
      let newCondition: ViewCondition = {
        resistence: title === "resistence" ? checked : prevCondition.resistence,
        toxicant: title === "toxicant" ? checked : prevCondition.toxicant,
      };
      return newCondition;
    });
  };

  return { viewCondition, handleView };
}
