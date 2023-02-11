let currentPage = 1;
let totalPages;

async function fetchIssues(pageNumber) {
  const response = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
  );
  const data = await response.json();
  return data;
}

async function updatePage(pageNumber) {
  const issues = await fetchIssues(pageNumber);
  totalPages = Math.ceil(issues.length / 5);
  document.getElementById("page_number").innerText = `Page Number ${pageNumber}`;
  let issueList = "";
  for (let i = 0; i < 5; i++) {
    if (issues[i]) {
      issueList += `<li>${issues[i].title}</li>`;
    }
  }
  document.getElementById("issues_list").innerHTML = issueList;
}

document.getElementById("load_next").addEventListener("click", function () {
  if (currentPage === totalPages) return;
  currentPage++;
  updatePage(currentPage);
});

document.getElementById("load_prev").addEventListener("click", function () {
  if (currentPage === 1) return;
  currentPage--;
  updatePage(currentPage);
});

updatePage(currentPage);
