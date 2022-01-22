import React from "react";
import style from "./defaultbutton.module.scss";
interface Props {
  children: React.ReactNode;
}
const DefaultButton = (props: Props) => {
  const { children } = props;
  return <button className={style.button}>{children}</button>;
};

export { DefaultButton };
