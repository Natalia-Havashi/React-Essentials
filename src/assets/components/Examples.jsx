import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(str) {
    setSelectedTopic(str);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              title="Components"
              onSelect={() => handleSelect("components")}
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              title="JSX"
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              title="Props"
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              title="State"
              onSelect={() => handleSelect("state")}
            />
          </>
        }
      >
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select a topic.</p>
        )}
      </Tabs>
    </Section>
  );
}
