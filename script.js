const queryParamsContainer = document.getElementById('query-params-container')
const queryParamsAddBtn = document.getElementById('add-query-param-btn')
const headersContainer = document.getElementById('request-headers-container')
const headersAddBtn = document.getElementById('add-header-btn')

// Add new query param when add button is clicked
queryParamsAddBtn.addEventListener('click', () => {
    // Clone the template and append it to the container
    const newQueryParamElement = document.getElementById('query-key-value-template').content.cloneNode(true)
    
    // Add event listener to the delete button
    newQueryParamElement.querySelector('#data-remove-btn').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    
    // Append the new query param to the container
    queryParamsContainer.appendChild(newQueryParamElement)
})

// Add new header when add button is clicked
headersAddBtn.addEventListener('click', () => {
    // Clone the template and append it to the container
    const newHeaderElement = document.getElementById('header-key-value-template').content.cloneNode(true)
    // Add event listener to the delete button
    // select the delete button inside the new header element and add an event listener
    newHeaderElement.querySelector('#data-remove-btn').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    // Append the new header to the container
    headersContainer.appendChild(newHeaderElement)
})

// Add an event listener to the auth select list.
document.getElementById('authTypeSelector').addEventListener("change", (e)=>{
    // Get the value of the selected option
    const selectedValue = e.target.value
    let authElement;
    // Get the auth section
    switch(selectedValue) {
        case 'none':
            authElement = ''
            break
        case 'basic':
            authElement = document.getElementById('basic-auth-template').content.cloneNode(true)
            break
        case 'bearer':
            authElement = document.getElementById('bearer-auth-template').content.cloneNode(true)
            break
        case 'apikey':
            authElement = document.getElementById('apikey-auth-template').content.cloneNode(true)
            break
    }
    // replace the auth section with the new auth section
    document.getElementById('auth-section-container').replaceChildren(authElement)
    
});

document.getElementById('main-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const reqmethod = document.getElementById('req_method').value
    const endpoint = document.getElementById('req_endpoint').value
    const querykeys = document.getElementsByClassName('query-key form-control')
    const queryvalues = document.getElementsByClassName('query-value form-control')
    const headerkeys = document.getElementsByClassName('header-key')
    const headervalues = document.getElementsByClassName('header-value')
    const body = document.getElementById('req_body').value
    let params = {}
    let headers = {}
    for(let i = 0; i < querykeys.length; i++) {
        params[querykeys[i].value] = queryvalues[i].value
    }
    for(let i = 0; i < headerkeys.length; i++) {
        headers[headerkeys[i].value] = headervalues[i].value
    }
    let auth = {}
    const authType = document.getElementById('authTypeSelector').value
    switch(authType) {
        case 'basic':
            auth = {
                type: 'basic',
                username: document.getElementById('basic_auth_username').value,
                password: document.getElementById('basic_auth_password').value
            }
            break
        case 'bearer':
            auth = {
                type: 'bearer',
                token: document.getElementById('bearer_auth_token').value
            }
            break
        case 'apikey':
            auth = {
                type: 'apikey',
                key: document.getElementById('apikey_auth_key').value,
                value: document.getElementById('apikey_auth_value').value,
                addto: document.getElementById('apikey_authtype').value
            }
            break
    }
    axios({
        method:'POST',
        url: '/apireq',
        data: {
            reqmethod,
            endpoint,
            params,
            headers,
            auth,
            body
        }
    }).then((res) => {
        document.getElementById('api_response_displayer').innerText = JSON.stringify(res.data , null , 2)
        document.getElementById('api_responseheaders_displayer').innerText = JSON.stringify(res.headers, null, 2)
    }).catch((err) => {
        console.log(err)
    })
})

