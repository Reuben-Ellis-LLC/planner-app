import React from 'react';
import InputColor from 'react-input-color';

export const InputColorPicker = () => {
  const [color, setColor] = React.useState<{ rgba: string }>({ rgba: '' });

  console.log(color);

  return (
    <div>
      <InputColor
        initialValue="#5e72e4"
        onChange={setColor}
        placement="right"
      />
      {/* <div
        style={{
          width: 50,
          height: 50,
          marginTop: 20,
          backgroundColor: color.rgba,
        }}
      /> */}
    </div>
  );
};
