import React, { useState } from "react";
import "./HienNote.css";
import { connect } from "react-redux";
import { actEditNote, actRemoveNote } from "../actions/actNote";
function HienNote(props) {
  let noidungGhiChu = props.noteData.content;
  let  noteID = props.noteData.id
  const [noteContent, hamGanNoiDungGhiChu] = useState(noidungGhiChu); 
  const hamSuaGhiChu = (e) => {
    hamGanNoiDungGhiChu(e.target.value)
    props.editNote(noteID, e.target.value)
  }
  const hamXoaGhiChu = () => { props.removeNote(noteID) }
  return (    
      <div className="mt-2 card bg-warning">
        <textarea className="form-control" value= {noteContent} onChange = {hamSuaGhiChu}></textarea>
        <div className="card-footer p-1">
          <button className="btn btn-danger btn-sm float-right" 
          onClick={hamXoaGhiChu}>Xóa</button>
        </div>
      </div>
  );
}
 
// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id,content) => {dispatch(actEditNote(id, content)); },
    removeNote: id => {  dispatch(actRemoveNote(id)); }
  };
};
// chuyển state từ store thành props của component
const mapStateToProps = (state, ownProps) => {
  return { note: state.note, };
};
export default connect(null, mapDispatchToProps)(HienNote);