// File: static/js/data.js

const mockEmployees = [
  { id: 1, firstName: 'Sindhur', lastName: 'Gowda', email: 'sindhur.gowda@temp.com', department: 'Engineering', role: 'Software Engineer' },
  { id: 2, firstName: 'Rakesh', lastName: 'Gowda', email: 'rakesh.gowda@temp.com', department: 'Marketing', role: 'Digital Marketer' },
  { id: 3, firstName: 'Divya', lastName: 'Patil', email: 'divya.patil@temp.com', department: 'Finance', role: 'Accountant' },
  { id: 4, firstName: 'Manjunath', lastName: 'Shetty', email: 'manjunath.shetty@temp.com', department: 'Human Resources', role: 'HR Manager' },
  { id: 5, firstName: 'Lakshmi', lastName: 'Kumar', email: 'lakshmi.kumar@temp.com', department: 'Engineering', role: 'Frontend Developer' },
  { id: 6, firstName: 'Harsha', lastName: 'Nayak', email: 'harsha.nayak@temp.com', department: 'Sales', role: 'Sales Executive' },
  { id: 7, firstName: 'Bhavana', lastName: 'Pai', email: 'bhavana.pai@temp.com', department: 'Engineering', role: 'Backend Developer' },
  { id: 8, firstName: 'Vikram', lastName: 'Hegde', email: 'vikram.hegde@temp.com', department: 'Design', role: 'UI/UX Designer' },
  { id: 9, firstName: 'Anitha', lastName: 'Naik', email: 'anitha.naik@temp.com', department: 'Operations', role: 'Operations Lead' },
  { id: 10, firstName: 'Chandan', lastName: 'Shetty', email: 'chandan.shetty@temp.com', department: 'Support', role: 'Technical Support' },
];

function populateDepartmentOptions() {
  const departmentSet = new Set(mockEmployees.map(emp => emp.department));
  const departmentSelect = document.getElementById("filter-department");

  if (!departmentSelect) return;

  departmentSelect.innerHTML = '<option value="">All</option>';
  departmentSet.forEach(dept => {
    const opt = document.createElement("option");
    opt.value = dept;
    opt.textContent = dept;
    departmentSelect.appendChild(opt);
  });
}

window.populateDepartmentOptions = populateDepartmentOptions;
