import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import SecurityIcon from "@mui/icons-material/Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link href={"/admin/company"}>
      <ListItemButton>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Company" />
      </ListItemButton>
    </Link>

    <Link href={"/admin/user"}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItemButton>
    </Link>

    <Link href={"/admin/job"}>
      <ListItemButton>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Job" />
      </ListItemButton>
    </Link>

    <Link href={"/admin/resume"}>
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Resume" />
      </ListItemButton>
    </Link>

    <Link href={"/admin/permission"}>
      <ListItemButton>
        <ListItemIcon>
          <SecurityIcon />
        </ListItemIcon>
        <ListItemText primary="Permission" />
      </ListItemButton>
    </Link>

    <Link href={"/admin/role"}>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Role" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
