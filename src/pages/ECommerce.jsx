import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { GoPrimitiveDot, GorPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine } from "../components/index";
import classes from "./ECommerece.module.css";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../store/ContextProvider";
const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className={classes["ecommerce__container"]}>
      <div className={classes["ecom-earnings__box"]}>
        <div className={classes["ecom-first__cols"]}>
          <div className={classes["first-cols__text"]}>
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,523,55</p>
            </div>
          </div>
          <div className="btn__box mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/* ____ */}

        <div className={classes["ecom-second__cols"]}>
          {earningData.map((item) => (
            <div key={item.title} className={classes["earning-data__box"]}>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className={classes["icon__btn"]}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue- ROW */}
      <div className={classes["revenue__box"]}>
        <div className={classes["revenue-content__box"]}>
          <div className={classes["renvenue-heading__box"]}>
            <p className={classes["revenue__p1"]}>Revenue Updates</p>

            <div className={classes["heading__status"]}>
              <p className={classes["revenue__p2"]}>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className={classes["status__budget"]}>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className={classes["pointers__box"]}>
            <div className="border-r-1 border-color m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Bduget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                  <span className="p-1.5 hover:drop-shadow-xl rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <Stacked width="320px" height="360px" />
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};
export default Ecommerce;
