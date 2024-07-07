import './radio.css'

const Radio = (props) => {
    const {label , ...radioProps} = props

  return (
    <div className="radio-group" >
        {
        label ? (
          <label name="day" className={props.checked ? "checked" : ''}>
            <span>{label}</span>
            &nbsp;
            {radioProps.required && <span>*</span>}
          </label>) : null
      }
      <input type="radio" name="day"  {...radioProps}/>
   
    </div>
  )
}

export default Radio
