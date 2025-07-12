const App = {
  init() {
    UI.renderList(mockEmployees);
    document.getElementById('search-input').addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      const filtered = mockEmployees.filter(emp =>
        emp.firstName.toLowerCase().includes(val) ||
        emp.lastName.toLowerCase().includes(val) ||
        emp.email.toLowerCase().includes(val)
      );
      UI.renderList(filtered);
    });
    document.getElementById('employee-form').addEventListener('submit', App.save);
  },
  delete(id) {
    const index = mockEmployees.findIndex(e => e.id === id);
    if (index !== -1 && confirm('Delete this employee?')) {
      mockEmployees.splice(index, 1);
      UI.renderList(mockEmployees);
    }
  },
  edit(id) {
    const emp = mockEmployees.find(e => e.id === id);
    if (emp) UI.showForm(emp);
  },
  save(e) {
    e.preventDefault();
    const id = Number(document.getElementById('employee-id').value);
    const empData = {
      id: id || Date.now(),
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      email: document.getElementById('email').value,
      department: document.getElementById('department').value,
      role: document.getElementById('role').value
    };
    if (id) {
      const index = mockEmployees.findIndex(e => e.id === id);
      if (index !== -1) mockEmployees[index] = empData;
    } else {
      mockEmployees.push(empData);
    }
    UI.cancelForm();
    UI.renderList(mockEmployees);
  }
};

window.onload = App.init;
