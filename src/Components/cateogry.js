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

const CategoryTitle = ({ record }) => {
  return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
};

export const CategoryList = (props) => (
  <List {...props} title="Categorias">
    <Datagrid rowClick="edit">
      <TextField source="title" label="Título" />
      <TextField source="description" label="Descripción" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CategoryCreate = (props) => (
  <Create {...props} successMessage="Categoria creada">
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <TextInput source="description" label="Descripción" />
    </SimpleForm>
  </Create>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <TextInput source="description" label="Descripción" />
    </SimpleForm>
  </Edit>
);

export const CategoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" label="Título" />
      <TextField source="description" label="Descripción" />
    </SimpleShowLayout>
  </Show>
);
