import React, { useEffect, useState } from "react";
import NavBtn from "../UI/NavBtn/NavBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./index";
import { useStateContext } from "../store/ContextProvider";
import { useLinkClickHandler } from "react-router-dom";
import { RiNotification3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    clickHandler,
    currentColor,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const resizeHandler = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", resizeHandler);

    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className={classes["navbar__container"]}>
      <NavBtn
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavBtn
          title="Cart"
          customFunc={() => clickHandler("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavBtn
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => clickHandler("cheat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavBtn
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => clickHandler("notification")}
          color={currentColor}
          icon={<RiNotification3Fill />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className={classes["userprofile__box"]}
            onClick={() => clickHandler("userprofile")}
          >
            <img className={classes["avatar__img"]} src={avatar} />
            <p>
              <span className="text-gray-400">Hi,</span>{" "}
              <span className={classes["username__text"]}>Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <Notification />}
        {isClicked.notification && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
