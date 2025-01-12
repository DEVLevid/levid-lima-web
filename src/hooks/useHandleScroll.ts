import { MouseEvent } from "react";

export const useHandleScroll = (
  event: MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  const offset = 80;
  if (section) {
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  }
};

export const useHandleScrollBtn = (
  event: MouseEvent<HTMLButtonElement>,
  sectionId: string
) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  const offset = 80;
  if (section) {
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  }
};
