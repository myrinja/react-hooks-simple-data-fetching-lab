// create your App component here
import react,{useState,useEffect} from "react"
import { Response } from "whatwg-fetch"

 function App(){
    const[image, setImage] = useState(null)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(Response => Response.json())
        .then(data => 
            setImage(data.message))
       
    })
    return(
        <>
 <div>
      {image ? (
        <img src={image} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
</>
    )

}
 export default App;
 