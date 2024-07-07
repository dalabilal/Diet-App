import { useState } from 'react'

/**
 * 
 * @param {boolean} props boolean value
 * @returns 
 */

const usePopUp = (props) => {

    const [ PopUp , setPopup ] = useState(props);
    const setPopUp = () => setPopup(!PopUp);
     return [PopUp , setPopUp]
}

export default usePopUp;