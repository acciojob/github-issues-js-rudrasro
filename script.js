let pageNumber = 1;

document.getElementById("load_next").addEventListener("click", function() {
  pageNumber++;
  updatePage(pageNumber);
});

document.getElementById("load_prev").addEventListener("click", function() {
  if (pageNumber > 1) {
    pageNumber--;
    updatePage(pageNumber);
  }
});

function updatePage(pageNumber) {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response => response.json())
    .then(data => {
      let issueList = document.getElementById("issue_list");
      issueList.innerHTML = "";
      data.forEach(function(issue) {
        let listItem = document.createElement("li");
        listItem.innerText = issue.title;
        issueList.appendChild(listItem);
      });
      document.getElementById("page_number").innerText = `Page Number ${pageNumber}`;
    });
}

updatePage(pageNumber);
