import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import AccountSummary from "./AccountSummary";
import AccountStatement from "./AccountStatement";

export default function DataTable() {
  const [isVertical, setIsVertical] = React.useState(true);
  return (
    <section className="menusides">
    <div className="sidesone">
      <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
        Vertical
        
      </Switch>
      <Tabs aria-label="Options" isVertical={isVertical}></Tabs>
      </div>
      <div className="sidestwo">
       
          <Tab key="photos" title="Photos">
            <AccountSummary/>
          </Tab>
          <Tab key="music" title="Music">
            <AccountStatement/> 
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>

      </div>
    </section>
  );
}
