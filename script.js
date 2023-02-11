const issuesList = document.getElementById("issue-list");
const pageNumberEl = document.getElementById("page-number");
const loadNextBtn = document.getElementById("load-next");
const loadPrevBtn = document.getElementById("load-prev");

let pageNumber = 1;

const updatePage = (issues) => {
  // Clear the current list of issues
  issuesList.innerHTML = "";

  // Loop through the issues and create a new list item for each one
  for (let issue of issues) {
    const newItem = document.createElement("li");
    newItem.innerText = issue.title;
    issuesList.appendChild(newItem);
  }

  // Update the page number
  pageNumberEl.innerText = `Page Number ${pageNumber}`;
};

const loadIssues = (page) => {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then((response) => response.json())
    .then((data) => updatePage(data));
};

loadIssues(pageNumber);

loadNextBtn.addEventListener("click", () => {
  pageNumber++;
  loadIssues(pageNumber);
});

loadPrevBtn.addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber--;
    loadIssues(pageNumber);
  }
});
