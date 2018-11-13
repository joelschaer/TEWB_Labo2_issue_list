export var issues = []
var lastIssueId = 0

export const addIssue = (issue) => {
    lastIssueId += 1;
    issue.id = lastIssueId;
    issue.status = "open";
    issues.push(issue);
    console.log(issues);
  }

export const getIssue = (id) => {
  return issues.find(obj => {
    return obj.id == id;
  })
}