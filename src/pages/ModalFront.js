import React from "react";
import "./ModalFront.css";
import applyimg from "../images/apply.png";
const ModalFront = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            {/* <button className="close" onClick={close}>
              &times;
            </button> */}
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              <div className="apply">
                <img
                  className="checkimg"
                  alt="check"
                  src={applyimg}
                  width="16px"
                  height="16px"
                />
                &nbsp;확인{" "}
              </div>
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalFront;
