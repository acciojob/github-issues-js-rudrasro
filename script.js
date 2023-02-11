let pageNumber = 1;

const loadIssues = async (pageNumber) => {
  const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`);
  const data = await res.json();

  const issueList = document.getElementById("issue-list");
  issueList.innerHTML = "";

  data.forEach((issue) => {
    const issueItem = document.createElement("li");
    issueItem.innerText = issue.title;
    issueList.appendChild(issueItem);
  });
};

const updatePage = () => {
  const pageHeading = document.getElementById("page-number");
  pageHeading.innerText = `Page number ${pageNumber}`;

  loadIssues(pageNumber);
};

document.getElementById("load_next").addEventListener("click", () => {
  pageNumber += 1;
  updatePage();
});

document.getElementById("load_prev").addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber -= 1;
    updatePage();
  }
});

updatePage();
