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

const DirectorTitle = ({ record }) => {
  return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
};

export const DirectorList = (props) => (
  <List {...props} title="Directores">
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nombre" />
      <TextField source="last_name" label="Apellido" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DirectorCreate = (props) => (
  <Create {...props} successMessage="Colleción creada">
    <SimpleForm redirect="show">
      <TextInput source="name" label="Nombre" />
      <TextInput source="last_name" label="Apellido" />
    </SimpleForm>
  </Create>
);

export const DirectorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="name" label="Nombre" />
      <TextInput source="last_name" label="Apellido" />
    </SimpleForm>
  </Edit>
);

export const DirectorShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Nombre" />
      <TextField source="last_name" label="Apellido" />
    </SimpleShowLayout>
  </Show>
);
