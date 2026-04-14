export const normalizeUser = (user) => {
  return {
    id: user.id,
    
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    phone: user.phone || "",
    website: user.website || "",
    
    address: {
      city: user.address?.city || "",
      street: user.address?.street || "",
    },
    
    company: {
      name: user.company?.name || "",
    },
  };
};