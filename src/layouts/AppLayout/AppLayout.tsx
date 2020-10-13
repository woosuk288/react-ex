import React, { Fragment } from "react";

// import makeStyles from "@material-ui/core/styles/makeStyles";

// import Navbar from "components/Navbar";

interface AppLayoutProps {}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Fragment>
      {/* <Navbar /> */}
      <main /* className={classes.content} */>
        {/* <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense> */}
        {children}
      </main>
    </Fragment>
    // </div>
  );
}
