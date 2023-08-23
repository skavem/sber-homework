import React, { useEffect } from "react";

import { Header } from "./components/main/Header";
import { Selection } from "./components/main/Selection";
import { useAppDispatch } from "./store/hooks";
import { loadFood } from "./store/food/foodApi";
import { FoodsDisplay } from "./components/main/FoodsDisplay";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFood());
  }, [dispatch]);

  return (
    <div className="m-4 flex flex-col gap-5 xl:m-20 xl:gap-20">
      <Header />

      <main className="flex flex-col gap-5">
        <Selection />
        <FoodsDisplay />
      </main>
    </div>
  );
};
