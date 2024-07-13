
import { useState } from "react";
import { Transition } from 'react-transition-group'


const TransitionComp = () => {
  let [show,setShow] = useState(true)

  const toggleDiv = () =>{
    setShow(!show ? true :false)
  }


  return (
    <>

      {/* react transition use states and css transitions */}
      {/* react transition give us on entering or leaving state and then we need to define our own styles/logic */}

      {/* <Transition
        in={show}
        timeout={2000}
      >  
      { state => 
        <div style={{
          background:'red',
          height:'100px',
          transition:'all 2s ease',
          opacity: state === 'exited' || state === 'exiting' ? 0:1
        }}>
          {state}
        </div>
      }
      </Transition> */}

      <Transition
        in={show}
        timeout={{
          enter:2000,
          exit:50
        }}
        // enter={false} // removes the entering
        // exit={false} // removes the exiting
        onEnter={(node)=>{
          console.log('ENTER')
        }}
        onExit={(node)=>{
          console.log('EXIT')
        }}
      >  
        { state => 
          <div className={`square square-${state}`}>
            {`square square-${state}`}
          </div>
        }
      </Transition>
      <button className="btn btn-primary" onClick={toggleDiv}>Toggle show</button>
    </>
  );
};

export default TransitionComp;
