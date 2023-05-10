import React from 'react';

const SelectTextarea = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>
        <textarea ref={ref}/>
      </p>
      <p>
        <button onClick={props.onAllTextClick}>เลือกข้อความทั้งหมด</button>
      </p>
    </div>
  )
})

export default SelectTextarea