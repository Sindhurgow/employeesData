const Filters = {
  apply() {
    const dept = document.getElementById('filter-department').value;
    const role = document.getElementById('filter-role').value.toLowerCase();
    let results = mockEmployees;
    if (dept) results = results.filter(emp => emp.department === dept);
    if (role) results = results.filter(emp => emp.role.toLowerCase().includes(role));
    UI.renderList(results);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  populateDepartmentOptions();
});
