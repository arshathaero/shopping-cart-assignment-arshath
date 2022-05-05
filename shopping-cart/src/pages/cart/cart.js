
import {useNavigate} from 'react-router-dom'

const Cart = () =>{

    const navigate = useNavigate();


    let back = e => {
        e.stopPropagation();
       navigate(-1)
      };
      return<p  onClick={back}>asdaa</p>
    // return ( <div
    //     onClick={back}
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       bottom: 0,
    //       right: 0,
    //       background: "rgba(0, 0, 0, 0.15)",
    //       zIndex:11
    //     }}
    //   >
    //     <div
    //       className="modal"
    //       style={{
    //         position: "absolute",
    //         background: "#fff",
    //         top: 25,
    //         left: "10%",
    //         right: "10%",
    //         padding: 15,
    //         border: "2px solid #444",
    //         zIndex:11
    //       }}
    //     >
    //       <h1>ss</h1>
    //       <button type="button" onClick={back}>
    //         Close
    //       </button>
    //     </div>
    //   </div>)
}


export default Cart