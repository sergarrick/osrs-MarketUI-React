import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TabView, TabPanel } from 'primereact/tabview';
import Processing from '../Components/Tabs/processing';
import BarrowsSets from '../Components/Tabs/barrowsSets';
import Timer from '../Components/timer';
import UserConfig from '../Components/userConfig';
import Random from '../Components/Tabs/random';


export default function Dashboard() {


  return (
      <>
          <div className="grid" style={{width: '100%'}}>
              <div className="col-5">
                  <div>
                      <h1>OSRS Merchant's Assistant</h1>
                  </div>
              </div>
              <div className="col-2">
                  <UserConfig></UserConfig>
              </div>
              <div className="col-5">
                  <Timer></Timer>
              </div>
              <div className="col-12">
                  <TabView>
                      <TabPanel header="Processing">
                          <Processing></Processing>
                      </TabPanel>
                      <TabPanel header="Barrow's Sets">
                          <BarrowsSets></BarrowsSets>
                      </TabPanel>
                      <TabPanel header="Random">
                          <Random />
                      </TabPanel>
                  </TabView>
              </div>
          </div>

          
    </>
  )
}
