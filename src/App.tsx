import "./style/App.scss";
import { useState } from "react";
import { Tabs, Box, IconButton } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import NotFound from "./components/NotFound";
import getAllExtensions from "./extensions/index";

const ExtMap = getAllExtensions();

interface TabInfo {
  key: string;
  title: string;
  extension: any;
}

interface MenuInfo {
  key: string;
  title: string;
}

// const initialExtensions: TabInfo[] = [
//   { title: "Welcome Page", extension: "ext-welcome" },
//   { title: "Wiresheet Page", extension: "ext-flow" },
//   { title: "Setting Page", extension: "ext-setting" },
// ];
const initialExtensions: TabInfo[] = [];

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
    key: "ext-none",
    title: "None Page",
  },
];

function App() {
  const [currentExtension, setCurrentExtension] = useState("ext-welcome");
  const [extensions, setExtensions] = useState<TabInfo[]>(initialExtensions);

  const onCloseWidget = (key: string) => {
    // console.log(key);
    setExtensions(extensions.filter((ext) => ext.key !== key));
  };
  const onTabChange = (key: string) => {
    setCurrentExtension(key);
  };

  const onClickMenu = (info: MenuInfo) => {
    const found = extensions.find((ext) => ext.key === info.key);
    if (!found) {
      const extension = ExtMap.has(info.key) ? ExtMap.get(info.key) : NotFound;
      setExtensions([
        ...extensions,
        { title: info.title, key: info.key, extension },
      ]);
    }
    setCurrentExtension(info.key);
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
        {extensions.length == 0 ? (
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
              {extensions.map((ext) => (
                <div className="flex relative" key={ext.key}>
                  <Tabs.Trigger value={ext.key}>{ext.title}</Tabs.Trigger>
                  <div className="absolute right-0">
                    <IconButton
                      variant="soft"
                      className="relative top-0 right-0"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        onCloseWidget(ext.key);
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
              {extensions.map((ext) => {
                const Ext = ext.extension;
                return (
                  <Tabs.Content key={ext.key} value={ext.key}>
                    <Ext />
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
