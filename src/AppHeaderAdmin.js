import { Link } from "react-router-dom";
import { Button, Flex } from "@aws-amplify/ui-react";

export default function AppHeaderAdmin({ signOut }) {
  return (
    <Flex as="header" padding={"24px"} justifyContent="space-between">
      <Link className="site-logo" to="/" rel="home">
        Trademarkable
      </Link>
      <Button size="small" onClick={signOut}>
        Sign Out
      </Button>
    </Flex>
  );
}
