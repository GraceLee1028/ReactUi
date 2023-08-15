import {Outlet,Link,useLoaderData} from "react-router-dom"
import { getContacts } from "../contacts";
export async function loader(){
  const contacts = await getContacts()
  return {contacts}
}
export default function Root() {
  const {contacts} = useLoaderData()
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            {
              contacts.map((contact)=>{
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first||contact.last?(
                      <>
                        {contact.first}{contact.last}
                      </>
                    ):(
                      <i>No Name</i>
                    )}{"  "}
                    {contact.favorite&&<span>★</span>}
                  </Link>
                </li>
              })
            }
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}