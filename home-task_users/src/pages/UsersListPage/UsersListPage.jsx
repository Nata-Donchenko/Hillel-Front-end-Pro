import { useMemo, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const USERS_PER_PAGE = 6;

const UsersListPage = ({ users, deleteUser }) => {
  const navigate = useNavigate();
  
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  
  const cities = useMemo(() => {
    return ["all", ...new Set(users.map((user) => user.address?.city))];
  }, [users]);
  
  const filteredUsers = useMemo(() => {
    let result = [...users];
    
    result = result.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    
    if (cityFilter !== "all") {
      result = result.filter(
        (user) => user.address?.city === cityFilter
      );
    }
    
    result.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    
    return result;
  }, [users, search, cityFilter, sortOrder]);
  
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );
  
  const handleDelete = (id) => {
    deleteUser(id);
  };
  
  return (
    <Container>
   
      <div className="d-flex gap-2 mb-3 flex-wrap">
        
        <Form.Control
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        
        <Form.Select
          value={cityFilter}
          onChange={(e) => {
            setCityFilter(e.target.value);
            setPage(1);
          }}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Select>
        
        <Button
          variant="secondary"
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        >
          Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </Button>
        
        <Button onClick={() => navigate("/users/create")}>
          Create User
        </Button>
      </div>
      
      <Row>
        {paginatedUsers.map((user) => (
          <Col key={user.id} md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                
                <Card.Title>{user.name}</Card.Title>
                
                <Card.Text>
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Phone:</strong> {user.phone} <br />
                  <strong>City:</strong> {user.address?.city} <br />
                  <strong>Street:</strong> {user.address?.street} <br />
                  <strong>Company:</strong> {user.company?.name} <br />
                </Card.Text>
                
                <div className="d-flex gap-2 mt-auto">
                  <Button onClick={() => navigate(`/users/${user.id}`)}>
                    View
                  </Button>
                  
                  <Button
                    variant="warning"
                    onClick={() =>
                      navigate(`/users/${user.id}/edit`)
                    }
                  >
                    Edit
                  </Button>
                  
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="d-flex justify-content-center gap-2 mt-4">
        <Button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </Button>
        
        <span className="align-self-center">
          Page {page} / {totalPages || 1}
        </span>
        
        <Button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    
    </Container>
  );
};

UsersListPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      website: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
        street: PropTypes.string,
      }),
      company: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  
  deleteUser: PropTypes.func.isRequired,
};

export default UsersListPage;