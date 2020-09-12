import React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  Create,
  SimpleForm,
  Show,
  ShowButton,
  SimpleShowLayout,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  useDataProvider,
  useQuery,
  Query,
  AutocompleteInput,
} from "react-admin";

import axios from "axios";

// const GenderTitle = ({ record }) => {
//   return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
// };

export const GenderList = (props) => (
  <List {...props} title="Biblioteca">
    <Datagrid rowClick="edit">
      <TextField source="title" label="Título" />
      <TextField source="description" label="Descripción" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const GenderCreate = (props) => (
  <Create {...props} successMessage="Síntoma creado con éxito">
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <TextInput source="description" label="Descripción" />
      {/* <TextInput source="category_desc" label="Categoria" /> */}
    </SimpleForm>
  </Create>
);

export const GenderEdit = (props) => (
  <Edit {...props} >
    <SimpleForm redirect="show">
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Edit>
);

export const GenderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="Título" source="title" />
        </SimpleShowLayout>
    </Show>
);
