import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print'

const ReactPdf = () => {
  const componentRef = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'пробный документ',
  })
  
  return (
   <>
        <div ref={componentRef}>
            <p>Alwegr</p>
        </div>
        <button onClick={handlePrint}>Print</button>
   </>
  )
}

export default ReactPdf