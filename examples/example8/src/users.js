import './styles/users.scss'

const initUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const allUsers = document.createElement('div')
        allUsers.className = 'users-block'

        users.forEach(user => {
            const userEl = document.createElement('div')
            userEl.className = 'user-block'
            const userHeader = document.createElement('div')
            userHeader.className = 'user-header'
            userHeader.textContent = user.name
            userEl.appendChild(userHeader)

            const userContent = document.createElement('div')
            userContent.className = 'user-content'
            userContent.textContent = `${user.address.city} * ${user.address.street}`
            userEl.appendChild(userContent)

            allUsers.appendChild(userEl)
        })

        document.querySelector('#users-block').appendChild(allUsers)

    })
    .catch(error=>console.log(error))
}

initUsers()

