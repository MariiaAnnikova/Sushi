import React from 'react'
import { useTheme } from '../ContextTheme/ContextTheme'
import s from './ThemeSwitcher.module.css'
import { useState } from 'react';

export const ThemeSwitcher = () => {

    const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "Italian") {
      setTheme("English");
    } else {
      setTheme("English");
    }
  };

  return <div onClick={handleClick}>Switcher</div>;
}