document.querySelector('button').addEventListener('click', getValue)

function getValue(){
    let value = document.querySelector('input').value


fetch(`https://passwordinator.herokuapp.com?char=true&len=${value}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
     document.querySelector('#spec').innerText = data.data
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

fetch(`https://passwordinator.herokuapp.com?num=true&len=${value}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
     document.querySelector('#num').innerText = data.data
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

fetch(`https://passwordinator.herokuapp.com?num=true&char=true&len=${value}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)
     document.querySelector('#both').innerText = data.data
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}

