import {Form, redirect, useLoaderData, useNavigate} from "react-router-dom";
import {updateContact} from "../contacts";
//编辑
export async function action ({request,params}){
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId,updates);
  return redirect(`/contacts/${params.contactId}`);
}
export default function EditContact(){
  const {contact} = useLoaderData();
  const navigate = useNavigate();
  return (
    <Form method="post"  id="contact-form">
      <p>
        <span>name</span>
        <input placeholder="first" aria-label="first name" type="text" name="first" defaultValue={contact.first} />
        <input placeholder="last" aria-label="last name" type="text" name="last" defaultValue={contact.last} />
      </p>
      <label>
        <span>twitter</span>
        <input type="text" name="twitter" placeholder="@jack" defaultValue={contact.twitter} />
      </label>
      <p>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact.avatar}
          />
        </label>
      </p>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={()=>{navigate(-1);}}>Cancel</button>
      </p>
    </Form>
  )
}