import { useState, useRef } from 'react';

import RequestRecord from './RequestRecord';
import SendRecord from './SendRecord'

import './webapppage.scss'

const Webapppage = () => {
  const [ isRequesting, setIsRequesting ] = useState("bj");
  const recordOptionsRef = useRef(null)
  function checkBtn(e){
    if(e.target.classList.contains("req-a-record")){
      setIsRequesting("request");
    }
    if(e.target.classList.contains("send-a-record")){
      setIsRequesting("send")
    }
    const parentElement = e.target.parentElement;
    parentElement.style.display = "none";
  }
  return (
    <section className="webapppage">
      <div className="record-options" ref={recordOptionsRef}>
          <button className="req-a-record record-child" onClick={checkBtn}>Request a record</button>
          <button className="send-a-record record-child" onClick={checkBtn}>Send a record </button>
      </div>
      {isRequesting === "request" && <RequestRecord/>}
      {isRequesting === "send" && <SendRecord/>}
    </section>
  )
}

export default Webapppage