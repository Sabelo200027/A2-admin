import { Datagrid, DateField, List, ReferenceField, TextField, EditButton, ShowButton, Create} from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';

export const StudentList = () => (
    <List>
        <Datagrid rowClick="edit">
             <TextField source="id" />
             <TextField source="Student_Number" />
             <TextField source="Student_Email" />
             <TextField source="Faculty" />
            <DateField source="created" />
            <DateField source="updated" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Student_Number" />
            <TextInput source="Student_Email" />
            <TextInput source="Faculty" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);


export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Student_Number" />
            <TextField source="Student_Email" />
            <TextField source="Faculty" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Student_Number" />
            <TextInput source="Student_Email" />
            <TextInput source="Faculty" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);

