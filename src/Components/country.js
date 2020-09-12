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

const CountryTitle = ({ record }) => {
  return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
};

export const CountryList = (props) => (
  <List {...props} title="Países">
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nombre" />
      <TextField source="code" label="Código" />
      <TextField source="region" label="Región" />
      <TextField source="capital" label="Capital" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CountryCreate = (props) => (
  <Create {...props} successMessage="País creado">
    <SimpleForm redirect="show">
      <TextInput source="name" label="Nombre" />
      <TextInput source="code" label="Código" />
      <TextInput source="region" label="Región" />
      <TextInput source="capital" label="Capital" />
    </SimpleForm>
  </Create>
);

export const CountryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="name" label="Nombre" />
      <TextInput source="code" label="Código" />
      <TextInput source="region" label="Región" />
      <TextInput source="capital" label="Capital" />
    </SimpleForm>
  </Edit>
);

export const CountryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Nombre" />
      <TextField source="code" label="Código" />
      <TextField source="region" label="Región" />
      <TextField source="capital" label="Capital" />
    </SimpleShowLayout>
  </Show>
);
