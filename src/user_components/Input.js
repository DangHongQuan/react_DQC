// import React from "react";
// class Input extends React.Component{
//     render(){
//         const {id,label,inputRef,labelSize,...others}=this.props;
//         const LabelClass = `col-sm-${labelSize ? labelSize:3} col-form-label`;
//         return<>
        
//         <div className="row mb-3">
//                    <label htmlFor={id}  className={LabelClass}>
//                     {label}
//                     </label>
//                    <div className="col-sm">
//                     {others["rows"]>1 ? (<textarea ref={inputRef} className="form-control" id={id} {...others}></textarea>) : (<input ref={inputRef} className="form-control" id={id} {...others} />) }                  
//                    </div>
//                  </div>
//         </>
//     }
// }
// export default Input;
import React from "react";



const Input = ({ id, label,inputRef, labelSize,lastRow,required, ...others }) => {

  const LabelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label ${required?"required":""}`;

  return (
    <div className={`row${lastRow? "": "mb-3"}`}>
      <label htmlFor={id} className={LabelClass}>
        {label}
      </label>
      <div className="col-sm">
        {others["rows"] > 1 ? (
          <textarea ref={inputRef} className="form-control" id={id} {...others} />
        ) : (
          <input ref={inputRef} className="form-control" id={id} {...others} />
        )}
      </div>
    </div>
  );
};

export default Input;

