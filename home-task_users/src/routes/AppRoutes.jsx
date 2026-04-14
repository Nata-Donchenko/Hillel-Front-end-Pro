import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Toast, ToastContainer } from "react-bootstrap";
import { useEffect, useState } from "react";

import AppNavbar from "../components/AppNavbar";
import UsersListPage from "../pages/UsersListPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import CreateUserPage from "../pages/CreateUserPage";
import EditUserPage from "../pages/EditUserPage";

import { getUsers } from "../api/api";
import { normalizeUser } from "./normalizeUser.js";

const AppRoutes = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  
  const showToast = (message, variant = "success") => {
    setToast({ show: true, message, variant });
    
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2000);
  };
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        
        const data = await getUsers();
        const normalized = data.map(normalizeUser);
        
        setUsers(normalized);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    showToast("User deleted", "danger");
  };
  
  const updateUser = (id, values) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? normalizeUser({ ...u, ...values }) : u
      )
    );
    
    showToast("User updated");
  };
  
  const createUser = (values) => {
    const newUser = normalizeUser({
      id: Date.now(),
      ...values,
    });
    
    setUsers((prev) => [newUser, ...prev]);
    
    showToast("User created");
  };
  
  if (loading) return <div className="text-center mt-5">Loading...</div>;
  
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  
  return (
    <BrowserRouter>
      <AppNavbar />
      
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          
          <Route
            path="/users"
            element={
              <UsersListPage
                users={users}
                deleteUser={deleteUser}
              />
            }
          />
          
          <Route
            path="/users/create"
            element={<CreateUserPage createUser={createUser} />}
          />
          
          <Route
            path="/users/:id"
            element={<UserDetailsPage users={users} />}
          />
          
          <Route
            path="/users/:id/edit"
            element={
              <EditUserPage
                users={users}
                updateUser={updateUser}
              />
            }
          />
        </Routes>
      </Container>
      
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={toast.show}
          bg={toast.variant}
          onClose={() =>
            setToast((prev) => ({ ...prev, show: false }))
          }
        >
          <Toast.Body className="text-white">
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </BrowserRouter>
  );
};

export default AppRoutes;