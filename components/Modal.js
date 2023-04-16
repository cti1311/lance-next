import React from "react";
import style from "./Modal.module.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  let list = {};

  for (let suiteL2 of props.suites) {
    list[suiteL2.title] = [];
    // console.log(suiteL2)
    for (let specs of suiteL2.specs) {
      list[suiteL2.title].push(specs.title);
      // console.log(specs)
    }
  }

  console.log({ list });
  return (
    <>
    <div id="modal" className={`${style.modal} `} onClick={props.closeModal}>
      <div className={style.modal_content}>
        <div className={style.modal_header}>
          <h2 className={style.modal_header_title}>{props.title}</h2>
          <span className={style.modal_close} onClick={props.closeModal}>
            X
          </span>
        </div>
        <div className={style.modal_body}>
          {/* {JSON.stringify(props)} */}
          <div className={style.modal_sidebar}>
            <ModalSidebar list={list} />
          </div>
          <div className={style.modal_main}></div>
        </div>
        <div className={style.modal_footer}>{props.actions}</div>
      </div>
    </div>
    </>
  );
};

function ModalSidebar(props) {
  console.log(props.list)
  return (
    <>
      {Object.keys(props.list).map((item, index) => {
        return (
          <div className={style.modal_sidebar_item}>
            <h4 onClick={(e)=>{console.log(e);e.target.nextSibling.classList.toggle("hidden")}}>{item}</h4>
            <ul className="hidden">
              {props.list[item].map((item, index) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Modal;
