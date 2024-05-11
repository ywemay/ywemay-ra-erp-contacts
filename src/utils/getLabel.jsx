import labels from "./labels";

export function getLabel({contactType}) {
  const labelId = contactType || 0;
  return labels[labelId > contactLabels.length - 1 ? 0 : labelId ];
}