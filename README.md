# Student CRUD REST API (Learning Project)

A simple full-stack learning project that demonstrates how to build a CRUD-enabled REST API using Spring Boot, MySQL, and a React + Vite frontend.

## Project Structure

- `Backend/` - Spring Boot REST API service
- `Frontend/` - React + Vite frontend application

## Purpose

This project was created as a learning exercise to understand how data persistence and REST API design work together.
It implements a basic CRUD flow for managing student records via HTTP endpoints.

## Concepts

### CRUD
CRUD is mainly a data/database concept. It represents the four basic operations on data:

- **Create** → Insert data
- **Read** → Retrieve data
- **Update** → Modify data
- **Delete** → Remove data

These operations are performed on a database, but they can also apply to any data storage system (files, caches, etc.).

### REST
REST is an application/API architecture style for building web services.
It defines how clients like web apps or mobile apps interact with servers over HTTP.

A REST API receives requests from a frontend, applies logic, accesses storage if needed, and returns responses.
The database stores the actual data, while the frontend communicates only with the REST API.

### Example

A shopping application:

```text
Frontend (React)
      │
      │ GET /products
      ▼
REST API
      │
      │ Fetch products
      ▼
Database
```

The REST API returns a response like:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 25000
  }
]
```

### Common HTTP methods in REST APIs

| HTTP Method | Typical CRUD Mapping | Description |
|---|---|---|
| `GET` | Read | Retrieve a resource or list of resources |
| `POST` | Create | Create a new resource |
| `PUT` | Update | Replace an existing resource |
| `PATCH` | Update | Modify part of an existing resource |
| `DELETE` | Delete | Remove a resource |

### Why use a REST API?

Without a REST API:

```text
Frontend → Database ❌
```

This is insecure because clients would access storage directly.

With a REST API:

```text
Frontend
    │
    ▼
REST API
    │
    ▼
Database
```

The REST API:

- accepts requests from the frontend,
- validates input,
- applies business rules,
- reads or updates the database,
- sends standard HTTP responses back.

### Restaurant analogy

- **Customer** → Frontend
- **Waiter** → REST API
- **Kitchen** → Database

The frontend never goes directly to the database; it asks the REST API, just like a customer orders through a waiter.

### REST vs CRUD

#### 1. CRUD operations
CRUD means Create, Read, Update, Delete. It describes low-level data actions on storage:

- **Create**: add new data
- **Read**: retrieve data
- **Update**: modify data
- **Delete**: remove data

CRUD is about *what you can do with data*, usually in a database, file, or cache.

#### 2. REST API
REST is about *how* you expose operations over the web.
It organizes resources with URLs, uses HTTP methods, and returns data in formats such as JSON.

Typical REST endpoints often map to CRUD, but REST is not limited to CRUD. Examples of non-CRUD actions:

- `POST /login`
- `POST /checkout`
- `POST /send-email`
- `GET /weather`

#### 3. Key differences

| Aspect | CRUD | REST |
|---|---|---|
| Scope | Database-level actions | Web-level service architecture |
| Focus | Data manipulation | Resource representation and HTTP communication |
| Implementation | SQL queries or storage commands | HTTP endpoints and request/response formats |
| Standardization | Not externally standardized | Follows REST constraints like statelessness |
| Example | `UPDATE users SET name='Alice' WHERE id=1;` | `PUT /users/1 { "name": "Alice" }` |

#### 4. Important relationship points

- CRUD and REST are conceptually aligned but not dependent.
- You can use CRUD without REST (direct database access).
- You can use REST without strict CRUD mapping (action-based endpoints like `/orders/123/approve`).
- REST provides the transport and interface, while CRUD describes the data operations behind it.

### CRUD to REST mapping example

| CRUD Operation | HTTP Method | Example REST Endpoint |
|---|---|---|
| Create | `POST` | `/users` |
| Read | `GET` | `/users` or `/users/123` |
| Update | `PUT`/`PATCH` | `/users/123` |
| Delete | `DELETE` | `/users/123` |

### Summary

- **CRUD** defines *what* can be done to data.
- **REST** defines *how* those actions are exposed over the web.
- REST often implements CRUD semantics, but it can also support operations outside CRUD.
- CRUD provides a useful guideline for designing RESTful APIs, but it is not required.

## Backend Overview

The backend is a Spring Boot application built with Java 17 and Maven.

### Key backend files

- `Backend/pom.xml` - Maven dependencies and build plugins
- `Backend/src/main/java/com/example/API/ApiApplication.java` - Spring Boot application entry point
- `Backend/src/main/java/com/example/api/Models/Student.java` - Student entity model
- `Backend/src/main/java/com/example/api/Repository/StudentRepository.java` - JPA repository layer
- `Backend/src/main/java/com/example/api/Services/StudentService.java` - Service layer that handles persistence logic
- `Backend/src/main/java/com/example/api/Controllers/StudentController.java` - REST controller exposing student endpoints
- `Backend/src/main/resources/application.properties` - MySQL database configuration

### Backend functionality

The backend exposes the following REST endpoints:

- `POST /api/students` – create a new student
- `GET /api/students` – retrieve all students
- `GET /api/students/{id}` – retrieve a student by ID
- `PUT /api/students/{id}` – update an existing student
- `DELETE /api/students/{id}` – delete a student

The student entity includes:

- `id`
- `name`
- `email`
- `branch`
- `phone`
- `age`

### Database setup

The backend uses MySQL with the following settings from `application.properties`:

- URL: `jdbc:mysql://localhost:3306/Students`
- Username: `root`
- Password: `L@KSHMI`
- Driver: `com.mysql.cj.jdbc.Driver`
- Hibernate DDL mode: `update`
- SQL logging: `true`

> Note: Update `spring.datasource.username` and `spring.datasource.password` if your MySQL credentials are different.

## Frontend Overview

The frontend is a React app scaffolded with Vite.

### Key frontend files

- `Frontend/package.json` - project dependencies and scripts
- `Frontend/src/main.jsx` - React app entry point
- `Frontend/src/Student.jsx` - registration form component
- `Frontend/src/Student.css` - form styles

### Frontend behavior

The React form allows the user to enter a student record and submit it.
It sends the form data to the backend using Axios.

The form fields include:

- Student ID
- Full Name
- Email
- Branch
- Phone Number
- Age

## How this was built step by step

1. Create a new Spring Boot project.
2. Add dependencies for Spring Web MVC, Spring Data JPA, MySQL connector, Lombok, and devtools.
3. Create the `Student` entity class and annotate it with JPA annotations.
4. Create `StudentRepository` by extending `JpaRepository<Student, Integer>`.
5. Add `StudentService` to implement CRUD operations using the repository.
6. Add `StudentController` to expose REST endpoints for student management.
7. Configure MySQL connection settings in `application.properties`.
8. Create the React app with Vite and install `axios`.
9. Build the `Student` form component and wire its submit handler to the API endpoint.
10. Run backend and frontend together to test the full stack.

## How to run

### Backend

From the `Backend/` folder:

```bash
./mvnw spring-boot:run
```

### Frontend

From the `Frontend/` folder:

```bash
npm install
npm run dev
```

## Important notes

- The backend endpoint is configured at `/api/students`.
- The frontend currently posts to `http://localhost:8080/students`, so update it if you want to match the backend path.
- This project is intended for learning the relationship between CRUD and REST, and how to build a simple full-stack application.

## Summary

This learning project teaches:

- how to model data using JPA entities,
- how to persist data in MySQL,
- how to implement CRUD operations in a service layer,
- how to expose RESTful HTTP endpoints,
- and how to consume them from a React frontend.

It is a practical example of how CRUD and REST work together in a full-stack app.