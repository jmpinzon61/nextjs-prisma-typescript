// import axios from "axios";

// async function loadTasks() {
//   const res = await axios.get('http://locahost:3000/api/task')
//   console.log(res)
// }

// async function loadTasks(){
//   const tasks = await prisma.task.findMany()
//   // console.log(tasks)
//   return tasks
// }

import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks(){
  return await prisma.task.findMany()
}

export default async function HomePage()  {
  const tasks = await loadTasks()

  return (
    <div className="grid md:lg:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map(task => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  )
}


