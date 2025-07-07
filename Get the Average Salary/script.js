//~ calculate average salary for each department and return an array of object || average salary above 65000

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 650000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

const result = Object.values(
  employees.reduce((acc, curr) => {
    const { department, salary } = curr;
    if (!acc[department]) {
      acc[department] = { department, total: 0, count: 0 };
    }
    acc[department].total += salary;
    acc[department].count += 1;
    return acc;
  }, {})
)
  .map(({ department, total, count }) => ({
    department,
    average: Math.round(total / count),
  }))
  .filter(({ average }) => average > 65000);

console.log(result);

//*expected output : [{department:"HR", average:71666}]
