import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //         color:'black',
    //         background:'white'
    //     })

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white',
        border:'2px solid',
        borderColor: props.mode ==='dark'?'white':'#042743'

    }

        // const[btntext, setBtnText] = useState("Enable Dark Mode")

        // const toggleStyle = ()=>{
        //     if(myStyle.color =='black'){
        //         setMyStyle({
        //             color:'white',
        //             backgroundColor:'black',
        //             border:'2px solid white'
        //         })
        //         setBtnText("Enable Light Mode")

        //     }
        //     else{
        //         setMyStyle({
        //             color:'black',
        //             backgroundColor:'white'
        //         })
        //         setBtnText("Enable Dark Mode");
        //     }
        // }
       
  return (  
    <div className="container">
        <h1 className="my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
        <div>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Free to </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
                </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="container">
    <button  type="button" onClick={toggleStyle}  className="btn btn-primary my-3">{btntext}</button>
    </div> */}
    </div>
  )
}
