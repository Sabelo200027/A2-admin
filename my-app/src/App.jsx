import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, Create } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { StudentList, StudentEdit, StudentShow, StudentCreate } from "./Student";

const pbProvider = PocketBaseProvider('https://special-space-memory-v6vqvrrv745w3xg4q-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider}>
      <Resource name="Student" list={StudentList} edit={StudentEdit} show={StudentShow} create={StudentCreate} recordRepresentation="Student_Number" />
    </Admin>
  )
}

export default App
