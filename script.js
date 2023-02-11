const issuesList = document.getElementById("issues-list");
const pageNumber = document.getElementById("page-number");
const loadPrevButton = document.getElementById("load_prev");
const loadNextButton = document.getElementById("load_next");

let currentPage = 1;

loadNextButton.addEventListener("click", () => {
  currentPage += 1;
  fetchIssues(currentPage);
});

loadPrevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    fetchIssues(currentPage);
  }
});

async function fetchIssues(page) {
  const response = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`
  );
  const data = await response.json();

  pageNumber.innerHTML = `Page number ${page}`;
  issuesList.innerHTML = "";

  data.forEach((issue) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = issue.title;
    issuesList.appendChild(listItem);
  });
}

fetchIssues(currentPage);
