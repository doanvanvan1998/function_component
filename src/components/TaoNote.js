import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actAddNote } from "../actions/actNote";


function TaoNote(props) {
    const [content, hamGanContent] = useState(); 
    const refNoteContent = useRef();
    const hamThemNote = () => {
      if (content.trim()=="") {
        alert("Bạn chưa nhập nội dung");
        return;
      }
      console.log(connect);
      props.addNote(content); //Props này tạo bởi hàm mapDispatch
      refNoteContent.current.value = '';    
      hamGanContent('');
    };
    
    return (
      <div className="col-md-12">
        <div className="input-group mb-8">
          <input type="text"  className="form-control"
            placeholder="Nội dung ghi chú"  
            onChange={(e) => { hamGanContent(e.target.value) }}  
            ref={refNoteContent} 
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-primary" 
              onClick={hamThemNote}>
              Thêm ghi chú
            </button>
          </div>
        </div>
      </div>
    );
  } 
  const mapDispatch = (dispatch) => {
    return {
      addNote: (content) => {
        dispatch(actAddNote(content));
      },
    };
  };
  export default connect(null, mapDispatch)(TaoNote);