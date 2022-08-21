import { useState } from "react"

function Converter(){
  const [hexColor, setHexColor] = useState({value:''})
  const [rgbColor, setRgbColor] = useState({value:''})

  const handleChangeText = (evt) => {
    const hexColor = evt.target.value
    setHexColor(prevState => ({...prevState,value:evt.target.value}))
    
    if(hexColor.length === 7){
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
      if (result != null){
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        setRgbColor(prevRgb => ({...prevRgb, value:'rgb(' + r + ',' + g +  ',' + b + ')'}))
      }
      else{
        setRgbColor(prevRgb => ({...prevRgb, value:"Ошибка"}))
      }
    }
    else{
      setRgbColor(prevRgb => ({...prevRgb, value:""}))
    }
  }

  return(
    <div style={{backgroundColor:`${rgbColor.value}`}} className="converter">
      <div className="converter__main">
        <input maxLength='7' value = {hexColor.value} onChange = {handleChangeText}  className = "converter__input"></input>
        <label className = "converter__label">{rgbColor.value}</label>
      </div>
    </div>
  )
}

export default Converter