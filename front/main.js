const url = 'http://127.0.0.1:5000/'

async function getUsers() {
  try {
    const response = await fetch(url)
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)

  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error; 
  }
}

// getUsers()

async function createUser(id, name, age) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, name, age}),
    })
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('new user:', data)

  } catch (error) {

    console.error('Error create:', error)
    throw error; 
  }
}

// createUser(3, 'Alex', 22)
// createUser(4, 'Ann', 26)

async function updateUser(id, name, age) {
  try {
    const response = await fetch(`${url}data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, age}),
    })
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const updateData = await response.json()
    console.log('update user:', updateData)

  } catch (error) {

    console.error('Error update user:', error)
    throw error; 
  }
}

// updateUser (1, 'July', 29)

async function deleteUser(id) {
  try {
    const response = await fetch(`${url}data/${id}`, {
      method: 'DELETE',
    })
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)

  } catch (error) {

    console.error('Error deleting user:', error)
    throw error; 
  }
}

// deleteUser(1)