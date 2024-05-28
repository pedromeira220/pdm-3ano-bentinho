import axios from "axios";


export async function verSeEhMilitante(sentence) {

  const response = await axios.post("http://localhost:3000/toxicity-classifier",  
  {sentence})

  return response.data
  
}