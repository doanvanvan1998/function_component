import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { connect } from 'react-redux'; 
import HienNote from './components/HienNote';
import TaoNote from './components/TaoNote';
function App(props ) {
  const kq= 
  <div className="container">
        <div className="row">
          <div className="col-6 bg-dark">
            <TaoNote />
            <div className="row">
            {props.note.map((n, index) => { // Render các ghi chú.
                return <HienNote noteData = {n} key={n.id}/>
            })}
            </div>                          
          </div>
          <div className="col-6 bg-secondary">Loại tin </div>
        </div>     
  </div>

  return (kq
    
  );
}
const mapStateToProps = (state, ownProps) => {  
  //console.log("Toàn bộ state " , state);
  return {  
    note: state.note,
    loaitin: state.loaitin,
  }; 
};
export default connect(mapStateToProps, null)(App);
