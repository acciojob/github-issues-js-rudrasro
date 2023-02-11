const issuesList = document.getElementById("issues_list");
const pageNumber = document.getElementById("page_number");
const loadPrev = document.getElementById("load_prev");
const loadNext = document.getElementById("load_next");

let currentPage = 1;

const fetchIssues = (page) => {
  const apiUrl = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      issuesList.innerHTML = "";
      data.forEach((issue) => {
        const li = document.createElement("li");
        li.textContent = issue.title;
        issuesList.appendChild(li);
      });
    });
};

fetchIssues(currentPage);

loadNext.addEventListener("click", () => {
  currentPage++;
  fetchIssues(currentPage);
  pageNumber.textContent = `Page Number ${currentPage}`;
});

loadPrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchIssues(currentPage);
    pageNumber.textContent = `Page Number ${currentPage}`;
  }
});
