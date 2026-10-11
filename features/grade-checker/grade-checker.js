document.getElementById("checkButton").addEventListener("click", function () {
  const field = document.getElementById("marks");
  const result = document.getElementById("result");
  const marks = Number(field.value);

  if (field.value.trim() === "" || !Number.isFinite(marks) || marks < 0 || marks > 100) {
    result.textContent = "Please enter a number from 0 to 100.";
    return;
  }

  let grade;
  if (marks >= 80) grade = "A";
  else if (marks >= 70) grade = "B";
  else if (marks >= 60) grade = "C";
  else if (marks >= 50) grade = "D";
  else grade = "F";

  result.textContent = "Your grade: " + grade;
});
