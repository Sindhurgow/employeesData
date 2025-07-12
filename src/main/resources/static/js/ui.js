const UI = {
  renderList(employees) {
    const list = document.getElementById('employee-list');
    list.innerHTML = '';
    employees.forEach(emp => {
      const div = document.createElement('div');
      div.className = 'employee-card';
      div.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p>Email: ${emp.email}</p>
        <p>Department: ${emp.department}</p>
        <p>Role: ${emp.role}</p>
        <button onclick="App.edit(${emp.id})">Edit</button>
        <button onclick="App.delete(${emp.id})">Delete</button>
      `;
      list.appendChild(div);
    });
  },
  toggleFilterPanel() {
    document.getElementById('filter-panel').classList.toggle('hidden');
  },
  showForm(emp = null) {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('form-title').textContent = emp ? 'Edit Employee' : 'Add Employee';
    if (emp) {
      document.getElementById('employee-id').value = emp.id;
      document.getElementById('first-name').value = emp.firstName;
      document.getElementById('last-name').value = emp.lastName;
      document.getElementById('email').value = emp.email;
      document.getElementById('department').value = emp.department;
      document.getElementById('role').value = emp.role;
    } else {
      document.getElementById('employee-form').reset();
    }
  },
  cancelForm() {
    document.getElementById('form-section').classList.add('hidden');
  }
};