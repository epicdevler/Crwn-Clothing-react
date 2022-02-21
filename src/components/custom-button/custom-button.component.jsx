import React from "react";

import '../../assets/styles/custom-button.styles.scss'

export const CustomButton = ({ children, ...members }) => {
  return (
      <button className={'custom-button'} {...members}>
          {children}
      </button>
  )
}