import { 
  InfiniteList as RAList
} from "react-admin";
import { Grid } from "./Grid";

export function List ({ grid, ...props }) {
  return <RAList 
    resource="people_contacts"
    {...props}>
    <Grid {...grid} />
  </RAList>
}