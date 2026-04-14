const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const response = await fetch(BASE_URL);
  
  if(!response.ok){
    throw new Error("Could not fetch users");
  };
  
  return await response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  
  if(!response.ok){
    throw new Error("Could not fetch user");
  };
  
  return await response.json();
};

export const createUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  
  if(!response.ok){
    throw new Error("Could not create user");
  };
  
  return await response.json();
}

export const updateUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  
  if(!response.ok){
    throw new Error("Could not update user");
  };
  
  return await response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if(!response.ok){
    throw new Error("Could not delete user");
  };
  
  return response.ok;
};