//@ts-nocheck
"use client"
import "./globals.css";
import { Button, Flex, ListItem, UnorderedList, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState(["First Task",]);
  const [Item, setItem] = useState("");
function removeItem(taskName){
  setTasks(
    tasks.filter((task) => {
      return task!= taskName;
  })
  );
}
function AddItem(taskName) {
  if (Item != '' && !tasks.includes(Item)) {
    setTasks([...tasks, Item]);
    setItem('');
  }
}
  return (
    <div className="container">

   
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      flexDirection="column"
    >
      <UnorderedList>
        {tasks.map((task) => {
          return (
            <ListItem key={task.index}>
              {task}
              <Button 
              className="btnrm"
                ml={10}
                onClick={() => {
                  removeItem(task); 
                }}>
                Remove
              </Button>
            </ListItem>
          )
        })}
      </UnorderedList>
      <Input
        placeholder="Task name..."
        value={Item}
        onChange={(e) => {
          setItem(e.target.value);
        }}>
      </Input>
<Button className="btn" onClick={AddItem}>
  Add Task
</Button>
    </Flex>
  </div>
  )
}
