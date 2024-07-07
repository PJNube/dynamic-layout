import "./style/App.scss";
import { Suspense, useState } from "react";
import { Tabs, Box, IconButton } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import NotFound from "./components/NotFound";
import AllExtensions from "./extensions/index";
// import { getAllExtensions } from "./extensions/index";
// const ExtMap = getAllExtensions();

interface TabInfo {
  key: string;
  title: string;
  extension: React.FC;
}

interface MenuInfo {
  key: string;
  title: string;
}

// const initialTabs: TabInfo[] = [];

const MenuItems: MenuInfo[] = [
  {
    key: "ext-welcome",
    title: "Welcome Page",
  },
  {
    key: "ext-dashboard",
    title: "Dashboard Page",
  },
  {
    key: "ext-setting",
    title: "Setting Page",
  },
  {
    key: "ext-flow",
    title: "Wiresheet Page",
  },
  {
    key: "ext-xxxxxxxxx",
    title: "None Page",
  },
];

function App() {
  const [currentExtension, setCurrentExtension] = useState("ext-welcome");
  const [tabs, setTabs] = useState<TabInfo[]>([]);

  const onCloseWidget = (key: string) => {
    // console.log(key);
    setTabs(tabs.filter((ext) => ext.key !== key));
  };
  const onTabChange = (key: string) => {
    setCurrentExtension(key);
  };

  const onClickMenu = (info: MenuInfo) => {
    const { key, title } = info;
    const found = tabs.find((ext) => ext.key === key);
    if (!found) {
      const extension = AllExtensions?.[key] || NotFound;
      setTabs([...tabs, { title, key, extension }]);
    }
    setCurrentExtension(key);
  };
  return (
    <div className="main-layout">
      <div className="tree-wrapper">
        <ul className="menus">
          {MenuItems.map((item) => (
            <li key={item.key}>
              <a href="#" onClick={() => onClickMenu(item)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-wrapper">
        {tabs.length == 0 ? (
          <h4 style={{ marginTop: 100 }}>
            Hi, Welcome. <br />
            Select the menu on the left.
          </h4>
        ) : (
          <Tabs.Root
            defaultValue={currentExtension}
            value={currentExtension}
            onValueChange={onTabChange}
          >
            <Tabs.List color="indigo">
              {tabs.map((p) => (
                <div className="flex relative" key={p.key}>
                  <Tabs.Trigger value={p.key}>{p.title}</Tabs.Trigger>
                  <div className="absolute right-0">
                    <IconButton
                      variant="soft"
                      className="relative top-0 right-0"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        onCloseWidget(p.key);
                      }}
                      style={{ padding: 0, width: 13, height: 13 }}
                    >
                      <Cross2Icon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </Tabs.List>
            <Box>
              {tabs.map((p) => {
                const { key, extension: Extension } = p;
                return (
                  <Tabs.Content key={key} value={key}>
                    <Suspense
                      fallback={<h1 className="loading-panel">Loading...</h1>}
                    >
                      <Extension />
                    </Suspense>
                  </Tabs.Content>
                );
              })}
            </Box>
          </Tabs.Root>
        )}
      </div>
    </div>
  );
}

export default App;
