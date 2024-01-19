// endpoint
const baseUrl = "http://localhost:5000"
// get form
const form = document.getElementById("entry-form")
// get alert box
const alerts = document.getElementById("alert")
const alertsSuccess = document.getElementById("alert-success")



// form data sending to backend
let sendData = async (data) => {
  let response = await fetch(baseUrl + "/create", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })

  let result = await response.json()
  return result
}

// get data from backend
let getData = async () => {
  let response = await fetch(baseUrl + "/", {method: "GET"})
  let result = await response.json()
  showData(result)
}

// load data when window loads
window.onload = () => getData()

// get form data
form.onsubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(form);
  // Convert FormData to JSON
  var json = {};
  formData.forEach((value, key) => {
    json[key] = value;
  });


  // sending data
  let sent = await sendData(json)

  // checking sent status
  if(sent['status'] == 0){
    alerts.textContent = sent['data']
    alerts.classList.add('open')

    setTimeout(() => {
      alerts.classList.remove('open')
    }, 3000)

    return
  }

  form.reset()
  alertsSuccess.textContent = sent['data']
  alertsSuccess.classList.add('open')

  setTimeout(() => {
    alertsSuccess.classList.remove('open')
  }, 3000)


  let fetchData = await getData()
  return false
}

// show data
let showData = (data) => {
  const target = document.getElementById("data-entry")
  target.innerHTML = '';

  data['data'].map((e) => {
    target.insertAdjacentHTML("beforeend", markup(e))
  })
}