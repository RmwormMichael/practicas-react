import React, { useState } from "react";

const EditorTexto = () => {
  const [texto, setTexto] = useState("");

  const [negrita, setNegrita] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subrayado, setSubrayado] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const [align, setAlign] = useState("left");

  // 1
  const Bold = () => {
    setNegrita(!negrita);
  };

  // 2
  const Italian = () => {
    setCursiva(!cursiva);
  };

  // 3
  const Underline = () => {
    setSubrayado(!subrayado);
  };

  // 4
  const changeFont = (valor) => {
    setFontSize(fontSize + valor);
  };

  // 5
  const changeAlign = (nuevoAlign) => {
    setAlign(nuevoAlign);
  };

  return (
    <>
      <div>EditorTexto</div>

      <textarea
        rows={8}
        cols={60}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          fontWeight: negrita ? "bold" : "normal",
          fontStyle: cursiva ? "italic" : "normal",
          textDecoration: subrayado ? "underline" : "none",
          fontSize: `${fontSize}px`,
          textAlign: align,
        }}
      />

      <button onClick={Bold}>
        Bold
      </button>

      <button onClick={Italian}>
        Italic
      </button>

      <button onClick={Underline}>
        Underline
      </button>

      <button onClick={() => changeFont(1)}>
        A+
      </button>

      <button onClick={() => changeFont(-1)}>
        A-
      </button>

      <button onClick={() => changeAlign("left")}>
        Left
      </button>

      <button onClick={() => changeAlign("center")}>
        Center
      </button>

      <button onClick={() => changeAlign("right")}>
        Right
      </button>
    </>
  );
};

export default EditorTexto;
