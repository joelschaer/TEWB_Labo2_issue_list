export var issues = []
var lastIssueId = 0

export const addIssue = (issue) => {
    lastIssueId += 1;
    issue.id = lastIssueId;
    issue.status = "open";
    issues.push(issue);
  }

export const getIssue = (id) => {
  return issues.find(obj => {
    // eslint-disable-next-line
    return obj.id == id;
  })
}

export const deleteIssue = (id) => {
  const element = issues.find(obj => {
      // eslint-disable-next-line
      return obj.id == id;
    });
  const index = issues.indexOf(element);

  if (index !== -1) {
    issues.splice(index, 1);
}

}