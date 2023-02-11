let pageNumber = 1;
let issuesList = document.getElementById("issue_list");
let pageHeading = document.getElementById("page_number");

document.getElementById("load_next").addEventListener("click", function () {
  pageNumber++;
  fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response => response.json())
    .then(data => {
      issuesList.innerHTML = "";
      data.forEach(issue => {
        let li = document.createElement("li");
        li.innerText = issue.title;
        issuesList.appendChild(li);
      });
      pageHeading.innerText = `Page number ${pageNumber}`;
    });
});

document.getElementById("load_prev").addEventListener("click", function () {
  if (pageNumber > 1) {
    pageNumber--;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
      .then(response => response.json())
      .then(data => {
        issuesList.innerHTML = "";
        data.forEach(issue => {
          let li = document.createElement("li");
          li.innerText = issue.title;
          issuesList.appendChild(li);
        });
        pageHeading.innerText = `Page number ${pageNumber}`;
      });
  }
});
