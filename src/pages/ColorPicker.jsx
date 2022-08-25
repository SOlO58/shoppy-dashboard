import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "./Collection";
const ColoPicker = () => {
  const palleteStyling = "flex justify-center items-center gap-20 flex-wrap";

  const changeColor = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <section className="page-content__container">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className={palleteStyling}>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <ColorPickerComponent
            id="inline-pallete"
            mode="Palette"
            inline
            modeSwitcher={false}
            showButtons={false}
          />
        </div>
        <div className={palleteStyling}>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <ColorPickerComponent
            id="inline-pallete"
            mode="Picker"
            inline
            modeSwitcher={false}
            showButtons={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ColoPicker;
