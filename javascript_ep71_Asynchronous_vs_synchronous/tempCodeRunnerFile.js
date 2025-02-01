const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  console.log(xhr);

  // xhr.responseType = 'json'
  xhr.open('GET', 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000',false)
  xhr.send()

  xhr.addEventListener('load', () => {
                //json.parse se jo response aa rhi hai usko object mai convert krne ke liye likha hai
    // image.src = JSON.parse(xhr.response).message  
    console.log(xhr);
  })
                                                                                       //agr yha pe false krte hai iska matlb yh kh rha hai ki asynchrounours jo by defalyt hai use false kr do to ab data fetching bhi s
                                                                                       //synchronously hi hoga
  
})