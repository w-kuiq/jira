
import { User } from "./search-panel";
interface Project {
  id:string,
  name:string,
  personId:string,
  organization:string
}

interface ListProps {
  list:Project[],
  users:User[]
}
export const List = ({users,list}:ListProps)=>{
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(item=>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{users.find(user=>user.id===item.personId)?.name}</td>
        </tr>)
      }
    </tbody>
  </table>
}