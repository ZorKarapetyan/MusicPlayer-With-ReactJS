import { useRef } from "react"

function MusicUpload ({ addMusic }) {
    const inputRef = useRef(null) 

    function fileChooseing (e) {
      const reader = new FileReader()
        reader.onload = (event) => {
          if(event.target){
            addMusic(event.target.result)
          }
          
          }
          reader.readAsDataURL(e.target.files[0])
    }


    return (
        <>
        <div 
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          width: 'fit-content',
          color: 'blue',
          marginLeft: "20px"
        }}
        onClick = {() => {
          inputRef.current.click()
        }
        }>Upload your music</div>
        <div style = {{
            display: 'none'
        }}>
        <input 
          type = 'file' 
          ref = {inputRef}  
          onChange = {fileChooseing}
          accept = '.mp3,.wav'
        />
        </div>
        </>
    )
}

export default MusicUpload