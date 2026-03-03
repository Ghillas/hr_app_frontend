export const API_URL = "http://localhost:9000"

export const API_ROUTES = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  GET_USER: "/auth/user",
  EMPLOYEES: "/employees",
  EMPLOYEE: "/employee",
  EMPLOYEE_BY_ID: (id) => `/employee/${id}`,
  PROJECTS_FROM_EMPLOYEE_BY_ID: (id) => `employee/${id}/project`,
  PROJECTS: "/projects",
  PROJECT_BY_ID: (id) => `/project/${id}`,
  EMPLOYEES_FROM_PROJECT_BY_ID: (id) => `project/${id}/employees`,
  EMPLOYEE_BY_ID_FROM_PROJECT_BY_ID: (employee_id, project_id) => `employee/${employee_id}/project/${project_id}`
}