import React from 'react'


export default function About(props) {

  let style = {
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(9 67 112)':'white',
    border:props.mode==='dark'?'2px solid white':'2px solid black'
  }
  let style1 = {
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(9 67 112)':'white'
  }
// const [style, setStyle] = useState({
//   color :'black',
//   backgroundColor :'white'
// })
// const [btnText, setbtnText] = useState("Enable Dark Mode")
// const togglemode = ()=>{
//   if(style.color === 'white'){
//     setStyle({
//       color :'black',
//       backgroundColor :'white',
//       border: '1px solid black'
//     })
//     setbtnText("Enable Dark Mode")
//   }
//     else{
//       setStyle({
//         color:'white',
//         backgroundColor: 'black',
//         border : '1px solid white' 
//       })
// setbtnText("Enable Light Mode")
//   }
// }

  return (
    <>
    <div className="container" style={style1}>
      <h1 className="my-3">About Us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Description</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={style}>
      TextUtils is a React app for manipulating text. It offers features like text case conversion, space removal, and text reversal.
      TextUtils simplifies text manipulation tasks by providing a user-friendly interface. Whether you need to standardize text formatting or analyze text statistics, TextUtils has you covered.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Features Of TextUtills</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={style}>
      TextUtils enables users to convert text to uppercase, lowercase, or title case. It also provides functionality to remove extra spaces and reverse text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       <strong>Usage Of TextUtills</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={style}>
      Easily transform text with TextUtils by entering your text and selecting the desired operation. View the summary for word count, character count, and estimated reading time.
      </div>
    </div>
  </div>
  {/* <div className="container my-3">
    <button onClick={togglemode} className="btn btn-primary">{btnText}</button> */}
  {/* </div> */}
</div>
    </div>
    </>
  )
}
